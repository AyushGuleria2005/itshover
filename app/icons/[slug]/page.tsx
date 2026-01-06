import { Metadata } from "next";
import { notFound } from "next/navigation";
import IconDetailContent from "./icon-detail-content";
import { getIconsContent } from "@/actions/get-icons-content";
import fs from "fs";
import path from "path";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const indexPath = path.join(process.cwd(), "icons", "index.ts");
  const content = fs.readFileSync(indexPath, "utf-8");
  const namePattern = /name:\s*["']([^"']+)["']/g;
  const names: string[] = [];
  let match;

  while ((match = namePattern.exec(content)) !== null) {
    const name = match[1];
    if (name.includes("-")) {
      names.push(name);
    }
  }

  return [...new Set(names)].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug} animated icon | Its Hover`,
    description: `Motion-first animated ${slug} icon that moves with intent.`,
  };
}

export default async function IconDetailPage({ params }: Props) {
  const { slug } = await params;
  let code = "";

  try {
    code = await getIconsContent(slug);
    if (!code) {
      notFound();
    }
  } catch (error) {
    notFound();
  }

  return <IconDetailContent slug={slug} code={code} />;
}
