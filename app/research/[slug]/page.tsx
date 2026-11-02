import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { studies } from "@/lib/page-data";

export function generateStaticParams() { return studies.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find((entry) => entry.slug === slug);
  return { title: study ? `${study.title.en} | Arabian Life` : "Research | Arabian Life" };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = studies.findIndex((study) => study.slug === slug);
  if (index < 0) notFound();
  return <DetailPage kind="research" index={index} />;
}
