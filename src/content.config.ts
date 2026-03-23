import { defineCollection, z } from 'astro:content';

const boards = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    series: z.string(),
    quality: z.array(z.string()),
    design: z.string(),
    flex: z.number().min(1).max(5),
    description: z.string(),
    designedBy: z.string().optional(),
    sizes: z.array(z.object({
      size: z.number(),
      suffix: z.string().optional(),
      waistWidth: z.number(),
      effectiveEdge: z.number(),
      runningLength: z.number(),
      sidecutRadius: z.number(),
      stanceWidth: z.number(),
      noseTailWidth: z.number(),
      stanceLocation: z.number(),
    })),
    topImage: z.string(),
    baseImage: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = { boards };
