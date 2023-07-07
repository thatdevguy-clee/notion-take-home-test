import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Page with pricing information',
}
export default function Pricing() {

  return (
    <main className="container">
      <div id="header-section" className="flex">
        <div className="title-section">
          <h1>Pricing</h1>
          <p>Nothing for you to see here...</p>
        </div>
      </div>
    </main>
  )
}
