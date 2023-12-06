import { Mode } from "@/app/_components/ModeTab"

export type ModeStore = {
  mode: Mode
  setMode: (mode: Mode) => void
}
