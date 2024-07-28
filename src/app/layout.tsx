import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
import Nav from "@/my-components/Nav";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Aodhan Hamilton",
  description: "The portfolio of Aodhan Hamilton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="flex justify-center bg-slate-100 dark:bg-slate-900">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-11/12 md:w-4/5 lg:w-3/5">
              <Nav />
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
