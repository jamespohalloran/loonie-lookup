'use client'

import { getCategories } from '@/app/products'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'
interface SearchBoxProps {
  searchTerm: string
  category: string
  setSearchTerm: (term: string) => void
  setCategory: (category: string) => void
  placeholder?: string
  onChange: (terms: string, category: string) => void
}

export function SearchBox({
  searchTerm,
  category,
  setSearchTerm,
  setCategory,
  placeholder = 'Search...',
  onChange,
}: SearchBoxProps) {
  const categories = [{ key: '', name: 'All Categories' }, ...getCategories()]

  const [open, setOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState(
    categories.find((c) => c.key === category) || categories[0]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
    setCategory(selectedCategory.key)
    onChange(newTerm, selectedCategory.key)
  }

  const handleCategorySelect = (category: (typeof categories)[0]) => {
    setSelectedCategory(category)
    setOpen(false)
    setSearchTerm(searchTerm)
    setCategory(category.key)
    onChange(searchTerm, category.key)
  }

  return (
    <div className="flex w-full max-w-3xl items-center space-x-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="pr-20"
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="absolute right-0 top-0 mr-[1px] mt-[1px] h-[95%] rounded-l-none border-none"
            >
              {selectedCategory.name}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command value={category}>
              <CommandInput placeholder="Search category..." />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.key}
                      value={category.key}
                      onSelect={() => handleCategorySelect(category)}
                    >
                      {category.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
