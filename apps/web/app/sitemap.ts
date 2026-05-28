import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agora-web-eta.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await prisma.event.findMany({ select: { id: true, updatedAt: true } });

  const eventEntries: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${BASE_URL}/events/${e.id}`,
    lastModified: e.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/discover`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faqs`, changeFrequency: "monthly", priority: 0.6 },
    ...eventEntries,
  ];
}
