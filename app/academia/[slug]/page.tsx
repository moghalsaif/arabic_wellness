import { notFound } from "next/navigation";
import { EditorialPage } from "@/components/EditorialPage";
import { editorialPages } from "@/lib/programme-content";

const pages = editorialPages.filter(p => p.group === "academia");
export function generateStaticParams() { return pages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find(p => p.slug === slug);
  return { title: `${page?.en.title ?? "Academia"} | Arabian Life`, description: page?.en.intro };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!pages.some(p => p.slug === slug)) notFound();
  return <EditorialPage slug={slug} />;
}
