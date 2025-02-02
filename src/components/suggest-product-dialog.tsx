'use client'

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { ProductSubmission, productSubmissionSchema } from "@/lib/schemas"
import { Slider } from "./ui/slider"
import { submitProductSuggestion } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

interface SuggestProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SuggestProductDialog({ open, onOpenChange }: SuggestProductDialogProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [step, setStep] = React.useState<'product' | 'submitter'>('product')
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
    reset,
  } = useForm<ProductSubmission>({
    resolver: zodResolver(productSubmissionSchema),
    defaultValues: {
      percentCanadian: 100,
      proposedPopularity: 50,
    },
  })

  // Reset form and error state when dialog opens/closes
  React.useEffect(() => {
    if (!open) {
      reset()
      setError(null)
      setStep('product')
    }
  }, [open, reset])

  const onSubmit = async (data: ProductSubmission) => {
    setIsSubmitting(true)
    setError(null)

    try {
      await submitProductSuggestion(data)
      
      // Show success toast
      toast({
        title: "Product suggestion submitted!",
        description: "Thank you for helping us build our Canadian product database.",
        duration: 5000,
      })
      
      onOpenChange(false)
      reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to submit product suggestion. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = async () => {
    // Validate product fields before moving to next step
    const isValid = await trigger([
      'productName',
      'company',
      'percentCanadian',
      'category',
      'searchAliases',
      'proposedPopularity',
      'notes'
    ])
    
    if (isValid) {
      setStep('submitter')
    }
  }

  const handleBack = () => {
    setStep('product')
  }

  const handleClose = () => {
    setStep('product')
    onOpenChange(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="text-lg font-semibold">
            {step === 'product' ? 'Product Details' : 'Your Information'}
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-500">
            {step === 'product' 
              ? 'Tell us about the Canadian product you want to suggest'
              : 'Almost done! Just need some details about you'}
          </Dialog.Description>

          {/* Add error message display */}
          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            {step === 'product' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Product Name</label>
                  <p className="text-sm text-gray-500">Enter the name of the product you want to suggest.</p>
                  <input
                    {...register("productName")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Product name"
                  />
                  {errors.productName && (
                    <p className="mt-1 text-sm text-red-600">{errors.productName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <p className="text-sm text-gray-500">Enter the company that produces this product (e.g., Unilever).</p>
                  <input
                    {...register("company")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="Unilever"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Percent Canadian Owned</label>
                  <p className="text-sm text-gray-500">Enter the percentage of Canadian ownership (e.g., 0 for multinational, 100 for 100% Canadian).</p>
                  <Slider
                    value={[watch("percentCanadian")]}
                    onValueChange={(value) => setValue("percentCanadian", value[0])}
                    max={100}
                    min={0}
                    step={1}
                    className="mt-2"
                  />
                  <span className="mt-1 block text-sm text-gray-500">{watch("percentCanadian")}%</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <p className="text-sm text-gray-500">Suggest what category this product belongs to.</p>
                  <input
                    {...register("category")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="soap"
                  />
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Notes</label>
                  <p className="text-sm text-gray-500">Provide any additional details about the product.</p>
                  <textarea
                    {...register("notes")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    rows={3}
                    placeholder="Produced by Unilever, a multinational consumer goods company."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Aliases</label>
                  <p className="text-sm text-gray-500">Enter alternative names for this product, separated by commas.  This will help our search engine find the product.</p>
                  <input
                    {...register("searchAliases")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    placeholder="body wash"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Proposed Popularity</label>
                  <p className="text-sm text-gray-500">Rate how popular you think this product is (1-100).</p>
                  <Slider
                    value={[watch("proposedPopularity")]}
                    onValueChange={(value) => setValue("proposedPopularity", value[0])}
                    max={100}
                    min={1}
                    step={1}
                    className="mt-2"
                  />
                  <span className="mt-1 block text-sm text-gray-500">{watch("proposedPopularity")}%</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    {...register("submitterName")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                  {errors.submitterName && (
                    <p className="mt-1 text-sm text-red-600">{errors.submitterName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input
                    type="email"
                    {...register("submitterEmail")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  />
                  {errors.submitterEmail && (
                    <p className="mt-1 text-sm text-red-600">{errors.submitterEmail.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="mt-6 flex justify-end space-x-3">
              {step === 'submitter' && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  disabled={isSubmitting}
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              {step === 'product' ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                  disabled={isSubmitting}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
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