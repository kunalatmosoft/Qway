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
      <head>
        <link rel="icon" href="https://as2.ftcdn.net/v2/jpg/04/74/47/55/1000_F_474475514_RvoYQG6un3iEeRAkvLP5ZH0uoEM9HUM2.jpg" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

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
