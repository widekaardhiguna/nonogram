"use client"

import { useState } from "react"
import { Button, Dialog } from "@/components"
import { TutorialGrid } from "./TutorialGrid"
import { steps } from "./steps"

export type TutorialDialogProps = {
  Trigger: React.ReactNode
}

export const TutorialDialog = ({ Trigger }: TutorialDialogProps) => {
  const [currentStep, setCurrentStep] = useState(0)

  const onNext = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const onPrev = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const showPrev = currentStep !== 0
  const showNext = currentStep !== steps.length - 1

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{Trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>How To Play</Dialog.Title>
          <div className="overflow-auto">
            <TutorialGrid
              left={steps[currentStep].example}
              right={steps[currentStep].description}
            />
          </div>
          <div className="flex gap-2 justify-end p-3">
            {showPrev && (
              <Button size="small" variant="outlined" onClick={onPrev}>
                Previous
              </Button>
            )}
            {showNext && (
              <Button size="small" variant="filled" onClick={onNext}>
                Next
              </Button>
            )}
          </div>
          <Dialog.Close asChild>
            {/* <IconButton aria-label="Close">
              <Cross2Icon />
            </IconButton> */}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
