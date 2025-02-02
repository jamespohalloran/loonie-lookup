import { NextResponse } from 'next/server'
import { productEditSchema } from '@/lib/schemas'
import { z } from 'zod'

const SLACK_WEBHOOK_URL = process.env.SLACK_SUGGEST_EDIT_WEBHOOK_URL || ''

if (!SLACK_WEBHOOK_URL) {
  throw new Error('SLACK_EDIT_WEBHOOK_URL is not defined in environment variables')
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the request data
    const validatedData = productEditSchema.parse(body)

    // Get changes by comparing with original data from the request
    const changes = []
    if (validatedData.name !== body.originalName) {
      changes.push(`• Name: "${body.originalName}" → "${validatedData.name}"`)
    }
    if (validatedData.company !== body.originalCompany) {
      changes.push(`• Company: "${body.originalCompany}" → "${validatedData.company}"`)
    }
    if (validatedData.categoryId !== body.originalCategoryId) {
      changes.push(`• Category: "${body.originalCategoryId}" → "${validatedData.categoryId}"`)
    }
    if (validatedData.percentCanadian !== body.originalPercentCanadian) {
      changes.push(`• Canadian Ownership: ${body.originalPercentCanadian}% → ${validatedData.percentCanadian}%`)
    }
    if (validatedData.notes !== body.originalNotes) {
      changes.push(`• Notes: "${body.originalNotes || 'None'}" → "${validatedData.notes || 'None'}"`)
    }

    // Format the message for Slack
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "✏️ Product Edit Suggestion",
            emoji: true
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Editing Product:* ${body.originalName} (by ${body.originalCompany})`
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Proposed Changes:*\n" + (changes.length ? changes.join("\n") : "No changes detected")
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Edit Notes:*\n${validatedData.editNotes}`
          }
        },
        {
          type: "divider"
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
          type: "section",
          text: {
            type: "mrkdwn",
            text: `<${validatedData.currentUrl}|View product in context>`
          }
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
    console.error('Product edit suggestion error:', error)

    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid edit suggestion data', details: error.errors },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'Failed to process edit suggestion' },
      { status: 500 }
    )
  }
} 