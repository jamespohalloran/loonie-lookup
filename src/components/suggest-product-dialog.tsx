'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { submitProductSuggestion } from '@/lib/actions'
import { ProductSubmission, productSubmissionSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Slider } from './ui/slider'
import { Textarea } from './ui/textarea'

interface SuggestProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const PRODUCT_FIELDS = [
  'productName',
  'company',
  'percentCanadian',
  'category',
  'searchAliases',
  'proposedPopularity',
  'notes',
] as const

export function SuggestProductDialog({ open, onOpenChange }: SuggestProductDialogProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [step, setStep] = React.useState<'product' | 'submitter'>('product')
  const [unexpectedError, setUnexpectedError] = React.useState<Error | null>(null)
  const { toast } = useToast()
  const firstInputRef = React.useRef<HTMLInputElement>(null)

  const form = useForm<ProductSubmission>({
    resolver: zodResolver(productSubmissionSchema),
    defaultValues: {
      percentCanadian: 100,
      proposedPopularity: 50,
    },
    mode: 'onChange', // Enable validation as user types
  })

  // Focus management
  React.useEffect(() => {
    if (open && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [open, step])

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      form.reset()
      setError(null)
      setStep('product')
      setIsSubmitting(false)
      setUnexpectedError(null)
    }
  }, [form])

  const handleClose = React.useCallback(
    (isOpen: boolean) => {
      if (!isOpen) {
        form.reset()
        setError(null)
        setStep('product')
        setIsSubmitting(false)
        setUnexpectedError(null)
        onOpenChange(false)
      }
    },
    [form, onOpenChange]
  )

  // Reset form state when dialog opens/closes
  React.useEffect(() => {
    if (!open) {
      handleClose(false)
    }
  }, [open, handleClose])

  const handleNext = async () => {
    try {
      const result = await form.trigger(PRODUCT_FIELDS)
      if (result) {
        setStep('submitter')
      }
    } catch (err) {
      setUnexpectedError(err instanceof Error ? err : new Error('Validation failed'))
    }
  }

  const handleBack = () => {
    setStep('product')
  }

  const onSubmit = async (data: ProductSubmission) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setError(null)

    try {
      await submitProductSuggestion(data)

      toast({
        title: 'Product suggestion submitted!',
        description: 'Thank you for helping us build our Canadian product database.',
        duration: 5000,
      })

      handleClose(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')

      toast({
        title: 'Error',
        description: 'Failed to submit product suggestion. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle unexpected errors
  if (unexpectedError) {
    return (
      <>
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Error</DialogTitle>
              <DialogDescription>An unexpected error occurred. Please try again.</DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => {
                setUnexpectedError(null)
                handleClose(false)
              }}
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="flex max-h-[95vh] flex-col overflow-hidden">
          <DialogHeader className="flex-shrink-0 pb-2">
            <DialogTitle className="text-lg font-semibold">Submit Product Suggestion</DialogTitle>

            <DialogDescription className="mt-2 text-sm text-gray-500">
              <span className="text-md block font-semibold">
                {step === 'product' ? 'Product Details' : 'Your Information'}
              </span>
              {step === 'product'
                ? 'Tell us about the Canadian product you want to suggest'
                : 'Almost done! Just need some details about you'}
              {error && (
                <div className="mt-4 rounded-md bg-red-50">
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
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex-1 overflow-y-auto">
                  <div className={step === 'product' ? 'space-y-2' : 'hidden'}>
                    <FormField
                      control={form.control}
                      name="productName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormDescription>Enter the name of the product you want to suggest.</FormDescription>
                          <FormControl>
                            <Input placeholder="Product name" {...field} ref={firstInputRef} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormDescription>
                            Enter the company that produces this product (e.g., Unilever).
                          </FormDescription>
                          <FormControl>
                            <Input placeholder="Unilever" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="percentCanadian"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Percent Canadian Owned</FormLabel>
                          <FormDescription>
                            Enter the percentage of Canadian ownership (e.g., 0 for multinational, 100 for 100%
                            Canadian).
                          </FormDescription>
                          <FormControl>
                            <div className="space-y-2">
                              <Slider
                                value={[field.value]}
                                onValueChange={(value) => field.onChange(value[0])}
                                max={100}
                                min={0}
                                step={1}
                              />
                              <span className="text-muted-foreground text-sm">{field.value}%</span>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormDescription>Suggest what category this product belongs to.</FormDescription>
                          <FormControl>
                            <Input placeholder="soap" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notes</FormLabel>
                          <FormDescription>Provide any additional details about the product.</FormDescription>
                          <FormControl>
                            <Textarea
                              placeholder="Produced by Unilever, a multinational consumer goods company."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="searchAliases"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Aliases</FormLabel>
                          <FormDescription>
                            Enter alternative names for this product, separated by commas.
                          </FormDescription>
                          <FormControl>
                            <Input placeholder="body wash" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="proposedPopularity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proposed Popularity</FormLabel>
                          <FormDescription>Rate how popular you think this product is (1-100).</FormDescription>
                          <FormControl>
                            <div className="space-y-2">
                              <Slider
                                value={[field.value]}
                                onValueChange={(value) => field.onChange(value[0])}
                                max={100}
                                min={1}
                                step={1}
                              />
                              <span className="text-muted-foreground text-sm">{field.value}%</span>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className={step === 'submitter' ? 'space-y-2' : 'hidden'}>
                    <FormField
                      control={form.control}
                      name="submitterName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input {...field} ref={step === 'submitter' ? firstInputRef : undefined} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="submitterEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input type="email" inputMode="email" autoComplete="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </form>
            </Form>
          </div>
          <div className="mt-auto flex-shrink-0 border-t pt-2">
            <DialogFooter className="flex flex-col gap-2 sm:flex-row">
              {step === 'submitter' && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Back
                </Button>
              )}
              <Button
                type="button"
                variant="ghost"
                onClick={() => handleClose(false)}
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              {step === 'product' ? (
                <Button type="button" onClick={handleNext} disabled={isSubmitting} className="w-full sm:w-auto">
                  Next
                </Button>
              ) : (
                <Button disabled={isSubmitting} className="w-full sm:w-auto" onClick={form.handleSubmit(onSubmit)}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              )}
            </DialogFooter>
          </div>

          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
