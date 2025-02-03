import { NextResponse } from 'next/server'
import { productRequestSchema } from '@/lib/schemas'
import { z } from 'zod'

const SLACK_WEBHOOK_URL = process.env.SLACK_REQUEST_WEBHOOK_URL || ''

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_WEBHOOK_URL is not defined in environment variables')
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the request data
    const validatedData = productRequestSchema.parse(body)

    // Format the message for Slack
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🆕 New Product Request",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Requester:*\n${validatedData.requesterName}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${validatedData.requesterEmail}`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Product Request:*\n${validatedData.productRequest}`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*OK to Contact:* ${validatedData.okToContact ? 'Yes' : 'No'}`
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
    console.error('Product request error:', error)

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to process product request' },
      { status: 500 }
    )
  }
}
