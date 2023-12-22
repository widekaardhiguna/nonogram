type DifficultiesLayoutProps = {
  Top?: React.ReactNode
  Center?: React.ReactNode
  Bottom?: React.ReactNode
}

const DifficultiesLayout = ({
  Bottom,
  Center,
  Top,
}: DifficultiesLayoutProps) => {
  return (
    <main className="h-full pt-14">
      <div>
        <div className="mb-2">{Top}</div>
        <div className=" mb-10">{Center}</div>
        <div>{Bottom}</div>
      </div>
    </main>
  )
}

export default DifficultiesLayout
