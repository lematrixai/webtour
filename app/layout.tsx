import type { Metadata } from "next";
import { Afacad, Ephesis,Dancing_Script, Great_Vibes, Sacramento} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import PageTransition from "@/components/PageTransition";
import ConditionalHeader from "@/components/conditional-header";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const dancing_script = Dancing_Script({
  variable: "--font-dancing_script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const great_vibes = Great_Vibes({
  variable: "--font-great_vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
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
        className={`${afacad.variable} ${ephesis.variable} ${dancing_script.variable} ${great_vibes.variable} ${sacramento.variable}  font-afacad antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <PageTransition>
              <ConditionalHeader />
              {children}
              <Footer/>
              <WhatsAppButton />
            </PageTransition>
          </ThemeProvider>
      </body>
    </html>
  );
}


