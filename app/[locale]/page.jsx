import Homepage from "@/ui/home";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Homepage />;
}
