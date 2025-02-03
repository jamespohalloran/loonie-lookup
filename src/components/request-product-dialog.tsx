'use client'

import { useToast } from '@/hooks/use-toast'
import { submitProductRequest } from '@/lib/actions'
import { ProductRequest, productRequestSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'

interface RequestProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestProductDialog({ open, onOpenChange }: RequestProductDialogProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductRequest>({
    resolver: zodResolver(productRequestSchema),
    defaultValues: {
      okToContact: false,
    },
  })

  // Reset form and error state when dialog opens/closes
  React.useEffect(() => {
    if (!open) {
      reset()
      setError(null)
    }
  }, [open, reset])

  const onSubmit = async (data: ProductRequest) => {
    setIsSubmitting(true)
    setError(null)

    try {
      await submitProductRequest(data)

      // Show success toast
      toast({
        title: 'Request submitted successfully!',
        description: 'Thank you for helping us grow our Canadian product listings.',
        duration: 5000,
      })

      onOpenChange(false)
      reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')

      // Show error toast
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-semibold">Request a Product</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            Tell us what Canadian products you&apos;d like to see listed
          </Dialog.Description>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                {...register('requesterName')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="John Doe"
              />
              {errors.requesterName && <p className="mt-1 text-sm text-red-600">{errors.requesterName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                {...register('requesterEmail')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="john@example.com"
              />
              {errors.requesterEmail && <p className="mt-1 text-sm text-red-600">{errors.requesterEmail.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Request</label>
              <p className="text-sm text-gray-500">What product would you like to see from a Canadian company?</p>
              <textarea
                {...register('productRequest')}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                rows={3}
                placeholder="Describe the type of product you're looking for..."
              />
              {errors.productRequest && <p className="mt-1 text-sm text-red-600">{errors.productRequest.message}</p>}
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="okToContact"
                  type="checkbox"
                  {...register('okToContact')}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3">
                <label htmlFor="okToContact" className="cursor-pointer text-sm text-gray-700">
                  Contact me when similar products are added
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>

          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
