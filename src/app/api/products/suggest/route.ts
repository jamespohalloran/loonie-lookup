import { NextResponse } from 'next/server'
import { productSubmissionSchema } from '@/lib/schemas'
import { z } from 'zod'

const SLACK_WEBHOOK_URL = process.env.SLACK_SUGGEST_WEBHOOK_URL || ''

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_WEBHOOK_URL is not defined in environment variables')
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the request data
    const validatedData = productSubmissionSchema.parse(body)

    // Format the message for Slack
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "💡 New Product Suggestion",
            emoji: true
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Product Name:*\n${validatedData.productName}`
            },
            {
              type: "mrkdwn",
              text: `*Company:*\n${validatedData.company}`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Category:*\n${validatedData.category}`
            },
            {
              type: "mrkdwn",
              text: `*Canadian Ownership:*\n${validatedData.percentCanadian}%`
            }
          ]
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Notes:*\n${validatedData.notes || 'No notes provided'}`
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Search Aliases:*\n${validatedData.searchAliases || 'None provided'}`
            },
            {
              type: "mrkdwn",
              text: `*Proposed Popularity:*\n${validatedData.proposedPopularity}%`
            }
          ]
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Submitted By:*\n${validatedData.submitterName}`
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${validatedData.submitterEmail}`
            }
          ]
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
    console.error('Product suggestion error:', error)

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid suggestion data', details: error.errors },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to process product suggestion' },
      { status: 500 }
    )
  }
}
