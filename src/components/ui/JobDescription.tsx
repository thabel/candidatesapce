"use client"

import { useState } from "react"
import type React from "react"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Wand2 } from "lucide-react"
import type { CVData } from "@/lib/utils"
import { generateCVFromDescription } from "@/app/actions/generate-cv"
import { toast } from "sonner"  // <<<--- updated!
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface JobDescriptionProps {
  data: CVData
  onUpdateCV: (newData: CVData | undefined) => void
}

export default function JobDescription({ data, onUpdateCV }: JobDescriptionProps) {
  const [description, setDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const handleGenerateFromDescription = async () => {
    if (!description.trim()) {
      toast.error("Please paste a job description first.")
      return
    }

    setIsGenerating(true)

    try {
      if(data == undefined) {
        console.log("data is undefined")
        return
      }
      const generatedCV = await generateCVFromDescription(description, data)
      onUpdateCV(generatedCV)

      toast.success("Your CV has been tailored to match the job description.")
    } catch (err) {
      console.error("Error generating CV:", err)
      toast.error("Failed to generate CV. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="job-description" className="text-sm font-medium">
          Job Description
        </Label>
        <p className="text-xs text-muted-foreground mb-2">
          Paste the job description from the internet to generate your CV content
        </p>
        <Textarea
          id="job-description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Paste job description here..."
          className="min-h-[250px] resize-y font-mono text-sm"
          disabled={isGenerating}
        />
      </div>

      <div className="flex justify-end">
        <Button
          type="button"
          className="gap-2"
          onClick={handleGenerateFromDescription}
          disabled={isGenerating || !description.trim()}
        >
          {isGenerating ? (
            <>
              <LoadingSpinner size="sm" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="h-4 w-4" />
              Generate CV from Description
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
