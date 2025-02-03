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
import { submitProductRequest } from '@/lib/actions'
import { ProductRequest, productRequestSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

interface RequestProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestProductDialog({ open, onOpenChange }: RequestProductDialogProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [unexpectedError, setUnexpectedError] = React.useState<Error | null>(null)
  const { toast } = useToast()
  const firstInputRef = React.useRef<HTMLInputElement | null>(null)

  const form = useForm<ProductRequest>({
    resolver: zodResolver(productRequestSchema),
    defaultValues: {
      okToContact: false,
    },
    mode: 'onChange',
  })

  // Focus management
  React.useEffect(() => {
    if (open && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100)
    }
  }, [open])

  const handleClose = React.useCallback(
    (isOpen: boolean) => {
      if (!isOpen) {
        form.reset()
        setError(null)
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

  const onSubmit = async (data: ProductRequest) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setError(null)

    try {
      await submitProductRequest(data)

      toast({
        title: 'Request submitted successfully!',
        description: 'Thank you for helping us grow our Canadian product listings.',
        duration: 5000,
      })

      handleClose(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')

      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle unexpected errors
  if (unexpectedError) {
    return (
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
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="flex max-h-[95vh] flex-col overflow-hidden">
          <DialogHeader className="flex-shrink-0 pb-2">
            <DialogTitle>Request a Product</DialogTitle>
            <DialogDescription>
              Tell us what Canadian products you&apos;d like to see listed
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
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="requesterName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} ref={firstInputRef} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="requesterEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          inputMode="email"
                          autoComplete="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="productRequest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Request</FormLabel>
                      <FormDescription>What product would you like to see from a Canadian company?</FormDescription>
                      <FormControl>
                        <Textarea placeholder="Describe the type of product you're looking for..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="okToContact"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Contact me when similar products are added</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>

          <DialogFooter className="mt-auto flex-shrink-0 border-t pt-2">
            <Button type="button" variant="ghost" onClick={() => handleClose(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button onClick={form.handleSubmit(onSubmit)} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </DialogFooter>

          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
