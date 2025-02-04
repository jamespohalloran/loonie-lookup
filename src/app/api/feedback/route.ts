import { NextResponse } from 'next/server'
import { feedbackSchema } from '@/lib/schemas'
import { z } from 'zod'

const SLACK_WEBHOOK_URL = process.env.SLACK_FEEDBACK_WEBHOOK_URL || ''

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_FEEDBACK_WEBHOOK_URL is not defined in environment variables')
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the request data
    const validatedData = feedbackSchema.parse(body)

    // Format the message for Slack
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📝 New Feedback Received",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*From:*\n${validatedData.email}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Feedback:*\n${validatedData.feedback}`
          }
        },
        {
          type: "divider"
        }
      ]
    }

    // Send the message to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    })

    if (!slackResponse.ok) {
      throw new Error('Failed to send message to Slack')
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Feedback submission error:', error)

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to process feedback' },
      { status: 500 }
    )
  }
} 