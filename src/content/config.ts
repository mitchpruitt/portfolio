// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      subtitle: z.string(),
      year: z.string(),
      role: z.string(),
      client: z.string(),
      studio: z.string(),
      description: z.string(),
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