import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Bai_Jamjuree, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import PhoneFixed from "@/components/Phone";

import "../globals.css";

const baiJamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "The20",
  description: "The20",
  icons: {
    icon: "/images/logo/logo.png",
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${baiJamjuree.className} ${montserrat.className}`} suppressHydrationWarning>
      <body>
        <NextTopLoader color="#0C0CDB" />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
            <PhoneFixed />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
