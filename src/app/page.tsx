import Link from "next/link"

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div>
        <h2>Select Difficulties</h2>
        <Link href="easy">Easy</Link> <Link href="medium">Medium</Link>{" "}
        <Link href="Hard">Hard</Link>{" "}
      </div>
    </main>
  )
}
