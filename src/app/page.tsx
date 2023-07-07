import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      This page redirects to product page.
      <Link href={'/product'}>If not, click this link.</Link>
    </main>
  )
}
