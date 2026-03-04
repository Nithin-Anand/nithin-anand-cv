import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    org: z.string(),
    date: z.string(),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const studies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    location: z.string().optional(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    status: z.enum(['live', 'archived', 'wip']).optional(),
  }),
});

const contact = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    url: z.string(),
  }),
});

export const collections = { works, studies, projects, contact };
