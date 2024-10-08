// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      order: z.optional(z.number()),
      title: z.string(),
      subtitle: z.string(),
      year: z.number(),
      role: z.string(),
      client: z.string(),
      studio: z.string(),
      description: z.string(),
      ogImage: z.string(),
      cover: image().refine((img) => img.width >= 1080, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      coverAlt: z.string(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection
};