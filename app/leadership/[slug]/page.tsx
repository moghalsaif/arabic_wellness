import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { leaders } from "@/lib/page-data";

export function generateStaticParams() { return leaders.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = leaders.find((leader) => leader.slug === slug);
  return { title: person ? `${person.name.en} | Arabian Life` : "Leadership | Arabian Life" };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = leaders.findIndex((leader) => leader.slug === slug);
  if (index < 0) notFound();
  return <DetailPage kind="leadership" index={index} />;
}
