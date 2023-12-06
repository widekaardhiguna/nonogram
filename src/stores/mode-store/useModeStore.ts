import create from "zustand"
import { ModeStore } from "./mode-store.types"
// import type {} from '@redux-devtools/extension' // required for devtools typing

const defaultStates = {
  mode: "campaign",
} as const

const useModeStore = create<ModeStore>()((set) => ({
  ...defaultStates,
  setMode: (mode) => set((prev) => ({ ...prev, mode })),
}))

export default useModeStore
