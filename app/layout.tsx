import type { Metadata } from "next";
import { Afacad, Ephesis } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import PageTransition from "@/components/PageTransition";
import ConditionalHeader from "@/components/conditional-header";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ephesis = Ephesis({
  variable: "--font-ephesis",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Luxury adventure tour",
  description: "Luxury adventure tour website for travel agency ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${afacad.variable} ${ephesis.variable} font-afacad antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PageTransition>
              <ConditionalHeader />
              {children}
              <Footer/>
            </PageTransition>
          </ThemeProvider>
      </body>
    </html>
  );
}


