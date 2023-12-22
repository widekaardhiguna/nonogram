import DifficultiesLayout from "./_components/DifficultiesLayout"

type DifficultiesLayoutProps = {
  title: React.ReactNode
  stagesCounter: React.ReactNode
  stageList: React.ReactNode
}

const DifficultiesDetailLayout = ({
  stageList,
  stagesCounter,
  title,
}: DifficultiesLayoutProps) => {
  return (
    <DifficultiesLayout Top={title} Center={stagesCounter} Bottom={stageList} />
  )
}

export default DifficultiesDetailLayout
