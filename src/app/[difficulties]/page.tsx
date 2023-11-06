import Link from "next/link"

export type DifficultiesPageProps = {
  params: {
    difficulties: "easy" | "medium" | "hard"
  }
}

export default function DifficultiesPage({ params }: DifficultiesPageProps) {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <h2>Select Difficulties</h2>
        <Link href={`/${params.difficulties}/1`}>Stage 1</Link>{" "}
        <Link href={`/${params.difficulties}/2`}>Stage 2</Link>{" "}
        <Link href={`/${params.difficulties}/3`}>Stage 3</Link>{" "}
      </div>
    </main>
  )
}
