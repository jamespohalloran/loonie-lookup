import { ProductRequest, ProductSubmission } from "./schemas"

export async function submitProductRequest(data: ProductRequest) {
  try {
    const response = await fetch('/api/products/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to submit product request:', error)
    throw new Error('Failed to submit product request. Please try again.')
  }
}

export async function submitProductSuggestion(data: ProductSubmission) {
  try {
    const response = await fetch('/api/products/suggest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      throw new Error(errorData?.error || `Error: ${response.status}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to submit product suggestion:', error)
    throw new Error('Failed to submit product suggestion. Please try again.')
  }
} 