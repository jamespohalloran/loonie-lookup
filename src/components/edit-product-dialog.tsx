'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Product, categories } from '@/app/products'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname } from 'next/navigation'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ProductEditSubmission, productEditSchema } from '@/lib/schemas'
import { cn } from '@/lib/utils'

export function EditProductDialog({ children, product }: { children: React.ReactNode; product: Product }) {
  const [step, setStep] = useState(1)
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const pathname = usePathname()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset,
  } = useForm<ProductEditSubmission>({
    resolver: zodResolver(productEditSchema),
    defaultValues: {
      name: product.name,
      company: product.company,
      categoryId: product.categoryId,
      percentCanadian: product.percentCanadian,
      notes: product.notes,
      submitterName: '',
      submitterEmail: '',
      editNotes: '',
      currentUrl: `${window.location.origin}${pathname}${window.location.search}`,
    }
  })

  const onSubmit = async (data: ProductEditSubmission) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/products/edit-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          originalName: product.name,
          originalCompany: product.company,
          originalCategoryId: product.categoryId,
          originalPercentCanadian: product.percentCanadian,
          originalNotes: product.notes,
        }),
      })

      if (!response.ok) throw new Error('Failed to submit edit')

      toast({
        title: "Thank you!",
        description: "Your product edit suggestion has been submitted for review.",
      })
      
      setOpen(false)
      setStep(1)
      reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit edit suggestion. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = async () => {
    const isValid = await trigger(['name', 'company', 'categoryId', 'percentCanadian', 'notes'])
    if (isValid) {
      setStep(2)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{step === 1 ? 'Suggest An Edit Of Product Details' : 'Your Information'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className={cn("space-y-4", step !== 1 && "hidden")}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                {...register("company")}
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && (
                <p className="text-sm text-red-500">{errors.company.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={product.categoryId}
                onValueChange={(value) => setValue("categoryId", value)}
              >
                <SelectTrigger id="category" className={errors.categoryId ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categories).map(([id, category]) => (
                    <SelectItem key={id} value={id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.categoryId && (
                <p className="text-sm text-red-500">{errors.categoryId.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="percentCanadian">Percent Canadian</Label>
              <Input
                id="percentCanadian"
                type="number"
                min="0"
                max="100"
                {...register("percentCanadian", { valueAsNumber: true })}
                className={errors.percentCanadian ? "border-red-500" : ""}
              />
              {errors.percentCanadian && (
                <p className="text-sm text-red-500">{errors.percentCanadian.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                {...register("notes")}
                className={errors.notes ? "border-red-500" : ""}
              />
              {errors.notes && (
                <p className="text-sm text-red-500">{errors.notes.message}</p>
              )}
            </div>

            <Button
              type="button"
              onClick={handleNext}
              className="w-full"
            >
              Next
            </Button>
          </div>

          <div className={cn("space-y-4", step !== 2 && "hidden")}>
            <div className="space-y-2">
              <Label htmlFor="submitterName">Your Name</Label>
              <Input
                id="submitterName"
                {...register("submitterName")}
                className={errors.submitterName ? "border-red-500" : ""}
              />
              {errors.submitterName && (
                <p className="text-sm text-red-500">{errors.submitterName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="submitterEmail">Your Email</Label>
              <Input
                id="submitterEmail"
                type="email"
                {...register("submitterEmail")}
                className={errors.submitterEmail ? "border-red-500" : ""}
              />
              {errors.submitterEmail && (
                <p className="text-sm text-red-500">{errors.submitterEmail.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="editNotes">Edit Notes</Label>
              <Textarea
                id="editNotes"
                {...register("editNotes")}
                className={errors.editNotes ? "border-red-500" : ""}
                placeholder="Please explain your changes..."
              />
              {errors.editNotes && (
                <p className="text-sm text-red-500">{errors.editNotes.message}</p>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 