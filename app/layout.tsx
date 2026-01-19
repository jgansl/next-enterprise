import "styles/tailwind.css"

import SmoothScroll from "components/SmoothScroll"
import Footer from "@/components/Footer"
import { AppNavigationMenu } from "@/components/AppNavigationMenu"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <AppNavigationMenu />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
