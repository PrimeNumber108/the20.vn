import Detail from "@/ui/recruitment/detail";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const recruitmentIds = ["0", "1", "2", "3", "4"];
  return recruitmentIds.map((id) => ({ id }));
}

export default async function Page({ params }) {
  const id = (await params).id;

  const t = await getTranslations(`recruitment.position.${id}`);

  if (!t.has("title")) {
    return notFound();
  }

  return (
    <div>
      <Detail id={id} />
    </div>
  );
}
