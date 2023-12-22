"use client"

import { Button, NonogramView } from "@/components"
import { Fragment } from "react"
import { DifficultiesPageProps } from "../page"
import { IconChevronRight, IconSquareX } from "@tabler/icons-react"

import Timer from "./_components/Timer"
import FirstTimeClear from "./_components/FirstTimeClear"
import HowToPlay from "./_components/HowToPlay"
import Link from "next/link"
import FinishedTime from "./_components/FinishedTime"
import StageGrid from "./_components/StageGrid"
import useInitStage from "./_use-case/useInitStage"
import useCampaignNonogram from "./_use-case/useCampaignNonogram"

export type StagePageProps = {
  params: DifficultiesPageProps["params"] & {
    stage: string
  }
}

export default function StagePage({ params }: StagePageProps) {
  const {
    currentClearTime,
    nonogram,
    selectedStage,
    val,
    onChangeNonogram,
    onClear,
    nextStage,
  } = useCampaignNonogram({
    difficulty: params.difficulties,
    stage: params.stage,
  })

  useInitStage({
    difficulty: params.difficulties,
    stage: params.stage,
    currentClearTime: currentClearTime,
  })

  return (
    <StageGrid
      top={
        <Fragment>
          {currentClearTime && (
            <FinishedTime
              startAt={currentClearTime.startAt}
              finishedAt={currentClearTime.finishedAt}
            />
          )}
          {!currentClearTime && selectedStage?.startAt && (
            <Timer startAt={new Date(selectedStage.startAt)} />
          )}
        </Fragment>
      }
      mid={
        <NonogramView
          rules={nonogram.rule}
          value={val}
          onChange={onChangeNonogram}
        />
      }
      right={
        <Fragment>
          <HowToPlay />
          <FirstTimeClear duration={selectedStage?.firstClearTime} />
          <div className={"flex gap-2 justify-end xl:justify-normal"}>
            {currentClearTime ? (
              <Link href={nextStage()}>
                <Button
                  size="small"
                  color="primary"
                  rightIcon={<IconChevronRight />}
                >
                  Next Stage
                </Button>
              </Link>
            ) : (
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                rightIcon={<IconSquareX />}
                onClick={onClear}
              >
                Clear
              </Button>
            )}
          </div>
        </Fragment>
      }
    />
  )
}
