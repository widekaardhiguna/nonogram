"use client"

import ModeTab from "../ModeTab"
import DifficultiesButton from "../DifficultiesButton"
import useModeStore from "@/stores/mode-store/useModeStore"

const DifficultiesSelection = () => {
  const mode = useModeStore((state) => state.mode)
  const setMode = useModeStore((state) => state.setMode)
  // const [mode, setMode] = useState<Mode>("campaign")

  const randomPath = mode === "random" ? "random/" : ""

  return (
    <>
      <div className={"flex justify-center mt-10 mb-5"}>
        <ModeTab value={mode} onChange={(mode) => setMode(mode)} />
      </div>
      <h2
        className={
          "font-semibold tracking-wider text-white mb-3 text-lg text-center"
        }
      >
        SELECT DIFFICULTIES
      </h2>
      <div className={"flex flex-col gap-1"}>
        <DifficultiesButton href={randomPath + "easy"}>Easy</DifficultiesButton>
        <DifficultiesButton href={randomPath + "medium"}>
          Medium
        </DifficultiesButton>
        <DifficultiesButton href={randomPath + "hard"}>Hard</DifficultiesButton>
      </div>
    </>
  )
}

export default DifficultiesSelection
