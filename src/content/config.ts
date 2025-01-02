import { defineCollection, reference, z } from 'astro:content';

const faqs = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
		question: z.string(),
        answer: z.string(),
	}),
});

const stats = defineCollection ({
	type: "content",
	schema: ({image}) => z.object ({
        icon: image().optional(),
		title: z.string(),
        count: z.string(),
	}),
});

const stories = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: image(),
	  imagealt: z.string(),
	  relatedblog: z.array(reference("stories")).optional(),
	  author: z.string(reference('team')).optional(),
	  category: z.string().optional(),
      tags: z.array(z.string()).optional(),
	  draft: z.boolean(),
    })
});

const quotes = defineCollection({
    type: 'content',
    schema: z.object({
		quoteby: z.string(),
		quote: z.string(),
    })
});

const media = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      image: image(),
	  imagealt: z.string(),
	  description: z.string(),
	  filter: z.array(z.enum(['children', 'event', 'food'])).optional(),
    })
});

const mediafilters = defineCollection ({
	type: "data",
	schema: z.object({
		title: z.string(),
	}),
});

const slides = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
	  title: z.string(),
      image: image(),
	  imagealt: z.string(),
	  description: z.string(),
	  buttontext: z.string().optional(),
    })
});

const members = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      name: z.string(),
	  description: z.string(),
      joined: z.date(),
      image: image(),
	  imagealt: z.string(),
	  role: z.string().optional(),
	  location: z.string().optional(),
	  facebook: z.string().optional(),
	  twitter: z.string().optional(),
	  linkedin: z.string().optional(),
	  github: z.string().optional(),
	  tel: z.string().optional(),
	  mail: z.string().optional(),
    })
});

const policies = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
	  lastUpdated: z.date(),
      image: image(),
	  imagealt: z.string(),
    })
});

const team = defineCollection ({
	type: "data",
	schema: ({image}) => z.object ({
		headshot: image(),
		name: z.string(),
		bio: z.string().optional(),
		role: z.string().optional(),
		location: z.string().optional(),
		facebook: z.string().optional(),
		twitter: z.string().optional(),
		linkedin: z.string().optional(),
		github: z.string().optional(),
		tel: z.string().optional(),
		mail: z.string().optional(),
	}),
});

const testimonials = defineCollection({
	type: "content",
    schema: ({image}) => 
	z.object({
		ref: z.string(reference("members")).optional(),
		message: z.string(),
    }),
});

export const collections = {members, slides, stories, faqs, team, media, mediafilters, testimonials, policies, stats, quotes};