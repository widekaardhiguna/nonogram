"use client"

import { Button } from "@/components"
import { cx } from "class-variance-authority"

export type Mode = "campaign" | "random"

export type ModeTabProps = {
  value?: Mode
  onChange?: (mode: Mode) => void
}

const ModeTab = ({ value = "campaign", onChange }: ModeTabProps) => {
  return (
    <div
      className={
        "flex gap-3 rounded-xl border border-primary-400 bg-secondary-900 p-2"
      }
    >
      <Button
        size="small"
        color="primary"
        variant={getVariant(value, "campaign")}
        onClick={() => onChange?.("campaign")}
      >
        Campaign
      </Button>
      <Button
        size="small"
        color="primary"
        variant={getVariant(value, "random")}
        onClick={() => onChange?.("random")}
      >
        Random
      </Button>
    </div>
  )
}

export default ModeTab

const getVariant = (value: Mode, mode: Mode) => {
  return value === mode ? "filled" : "text"
}
