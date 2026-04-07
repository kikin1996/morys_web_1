import type { MetadataRoute } from "next";

const siteUrl = "https://www.nablatnici.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,                            lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteUrl}/vyber-bytu`,            lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteUrl}/standardy`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/galerie`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/aktuality`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
    { url: `${siteUrl}/kontakt`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.6 },
  ];
}
