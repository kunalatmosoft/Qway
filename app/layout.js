//import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/ui/Navbar"

import { Toaster } from "@/components/ui/sonner"

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atmosoft",
  description: "NEVER-FADES-AWAY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >                     <Navbar />
        {children}

        </ThemeProvider>        <Toaster />

      </body>
    </html>
  );/*className={inter.className}*/
}
