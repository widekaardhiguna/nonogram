import create from "zustand"
import { RandomStageStore } from "./random-stage-store.types"

const defaultStates = {
  currentClearTime: {
    startAt: new Date(),
    finishedAt: null,
  },
  game: null,
  val: [],
}

const useRandomStageStore = create<RandomStageStore>()((set) => ({
  ...defaultStates,
  setCurrentClearTime: (currentClearTime) =>
    set((prev) => ({ ...prev, currentClearTime })),
  setGame: (game) => set((prev) => ({ ...prev, game })),
  setVal: (val) => set((prev) => ({ ...prev, val })),
}))

export default useRandomStageStore
