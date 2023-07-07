import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Download Page',
  description: 'Page with download form',
}

export default function Download() {

  return (
    <main className="container">
      <div id="header-section" className="flex">
        <div className="title-section">
          <h1>Download</h1>
          <p>Nothing for you to see here...</p>
        </div>
      </div>
    </main>
  )
}
