import Navigation from '@/components/navigation/Navigation';
import './globals.css';

export const metadata = {
  title: 'Products | Notion Take Home Test',
  description: 'Products Page for Test for Notion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <div className="container mx-auto py-0 sm:py-4 md:py-10 px-4 md:px-[120px]">
          <header className="flex justify-between items-center">
            <div className="company-title">YourUni</div>
            <Navigation />
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
