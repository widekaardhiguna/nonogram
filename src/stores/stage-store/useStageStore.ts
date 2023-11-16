import create from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Duration, intervalToDuration } from "date-fns"
import { StageStore } from "./stage-store.types"
import { isStageExist } from "./stage-store-selector/isStageExist"
// import type {} from '@redux-devtools/extension' // required for devtools typing

const defaultStates = {
  stages: [],
}

const useStageStore = create<StageStore>()(
  // devtools(
  persist(
    (set) => ({
      ...defaultStates,
      setStages: (stages) => set((prev) => ({ ...prev, stages: stages })),
      newStage: (id, difficulty) =>
        set((prev) => {
          const isStageAlreadyExist = isStageExist(prev.stages, id, difficulty)
          if (isStageAlreadyExist) return { ...prev }
          return {
            ...prev,
            stages: [
              ...prev.stages,
              {
                id,
                difficulty,
                status: "onprogress",
                startDate: new Date().toISOString(),
                finishedDate: null,
                firstClearTime: null,
              },
            ],
          }
        }),
      restartStage: (id, difficulty) =>
        set((prev) => {
          return {
            ...prev,
            stages: prev.stages.map((stage) => {
              if (
                stage.id === id &&
                stage.difficulty === difficulty &&
                stage.status === "finished"
              ) {
                return {
                  ...stage,
                  status: "onprogress",
                  startDate: new Date().toISOString(),
                  finishedDate: null,
                }
              } else {
                return stage
              }
            }),
          }
        }),
      setStageFinish: (id, difficulty) =>
        set((prev) => {
          return {
            ...prev,
            stages: prev.stages.map((stage) => {
              if (stage.id === id && stage.difficulty === difficulty) {
                return {
                  ...stage,
                  status: "finished",
                  finishedDate: new Date().toISOString(),
                }
              } else {
                return stage
              }
            }),
          }
        }),
      setStageFirstClear: (id, difficulty) =>
        set((prev) => {
          return {
            ...prev,
            stages: prev.stages.map((stage) => {
              if (stage.id === id && stage.difficulty === difficulty) {
                if (stage.firstClearTime) return stage
                if (!stage.finishedDate) return stage
                if (!stage.startDate) return stage
                return {
                  ...stage,
                  firstClearTime: intervalToDuration({
                    start: new Date(stage.startDate),
                    end: new Date(stage.finishedDate),
                  }),
                }
              } else {
                return stage
              }
            }),
          }
        }),
      setStageClearDate: (id, difficulty) =>
        set((prev) => {
          return {
            ...prev,
            stages: prev.stages.map((stage) => {
              if (stage.id === id && stage.difficulty === difficulty) {
                return {
                  ...stage,
                  startDate: null,
                  finishedDate: null,
                }
              } else {
                return stage
              }
            }),
          }
        }),
    }),
    {
      name: "test@0.1",
    }
  )
  // )
)

export default useStageStore
