import type { Metadata } from "next";
import { Poppins,Afacad, Montserrat, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${poppins.variable} ${afacad.variable} ${montserrat.variable} ${jost.variable} font-poppins antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}


