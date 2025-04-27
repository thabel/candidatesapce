"use client"

import { useState, useRef, type KeyboardEvent, useEffect } from "react"
import { X, Plus, ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface MultiSelectProps {
  values: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  suggestions?: string[]
  className?: string
  tagClassName?: string
  maxSuggestions?: number
}

export function MultiSelect({
  values,
  onChange,
  placeholder = "Add item...",
  suggestions = [],
  className = "",
  tagClassName = "",
  maxSuggestions = 10,
}: MultiSelectProps) {
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault()
      if (!values.includes(inputValue.trim())) {
        onChange([...values, inputValue.trim()])
      }
      setInputValue("")
    } else if (e.key === "Backspace" && !inputValue && values.length > 0) {
      onChange(values.slice(0, -1))
    } else if (e.key === "Escape") {
      setShowSuggestions(false)
    } else if (e.key === "ArrowDown" && showSuggestions) {
      e.preventDefault()
      const firstButton = dropdownRef.current?.querySelector("button")
      if (firstButton) {
        ;(firstButton as HTMLButtonElement).focus()
      }
    }
  }

  const handleRemoveTag = (index: number) => {
    const newValues = [...values]
    newValues.splice(index, 1)
    onChange(newValues)
  }

  const handleAddSuggestion = (suggestion: string) => {
    if (!values.includes(suggestion)) {
      onChange([...values, suggestion])
    }
    setInputValue("")
    setShowSuggestions(false)
    inputRef.current?.focus()
  }

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions)
    if (!showSuggestions) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const filteredSuggestions = suggestions.filter(
    (suggestion) => !values.includes(suggestion) && suggestion.toLowerCase().includes(inputValue.toLowerCase()),
  )

  // Group suggestions into categories for better organization
  const categorizedSuggestions = () => {
    if (inputValue.trim() === "") {
      // When no search term, show popular suggestions
      return filteredSuggestions.slice(0, maxSuggestions)
    }

    // When searching, prioritize suggestions that start with the search term
    const startsWithTerm = filteredSuggestions.filter((s) => s.toLowerCase().startsWith(inputValue.toLowerCase()))

    // Then include suggestions that contain the search term elsewhere
    const containsTerm = filteredSuggestions.filter((s) => !s.toLowerCase().startsWith(inputValue.toLowerCase()))

    return [...startsWithTerm, ...containsTerm].slice(0, maxSuggestions)
  }

  const displaySuggestions = categorizedSuggestions()

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-white min-h-[42px]">
        {values.map((value, index) => (
          <div
            key={`${value}-${index}`}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm ${tagClassName}`}
          >
            <span>{value}</span>
            <button
              type="button"
              onClick={() => handleRemoveTag(index)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>

      {/* Input field in a separate row */}
      <div className="mt-2 relative">
        <div className="flex">
          <div className="relative w-full">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-4 w-4" />
            </div>
            <Input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
                setShowSuggestions(true)
              }}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              className="w-full pl-8 pr-10"
              placeholder={placeholder}
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full"
            onClick={toggleSuggestions}
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${showSuggestions ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && (
          <div
            ref={dropdownRef}
            className="relative z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-30 overflow-auto"
          >
            {displaySuggestions.length > 0 ? (
              <div className="py-1">
                {displaySuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleAddSuggestion(suggestion)}
                    className="flex items-center w-full px-3 py-2 text-sm text-left hover:bg-gray-100"
                  >
                    <Plus className="h-3 w-3 mr-2" />
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : inputValue ? (
              <div className="px-3 py-2 text-sm text-gray-500">
                No matching suggestions. Press Enter to add "{inputValue}".
              </div>
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">Type to search or add a custom skill</div>
            )}
          </div>
        )}
      </div>

      {/* Quick suggestion chips */}
      {!showSuggestions && suggestions.length > 0 && (
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Popular suggestions:</p>
          <div className="flex flex-wrap gap-1">
            {suggestions
              .filter((suggestion) => !values.includes(suggestion))
              .slice(0, 5)
              .map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleAddSuggestion(suggestion)}
                  className="inline-flex items-center px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs"
                >
                  <Plus className="h-3 w-3 mr-1" />
                  {suggestion}
                </button>
              ))}
            {suggestions.filter((suggestion) => !values.includes(suggestion)).length > 5 && (
              <button
                type="button"
                onClick={toggleSuggestions}
                className="inline-flex items-center px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs"
              >
                More...
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
