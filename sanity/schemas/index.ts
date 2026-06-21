// sanity/schemas/index.ts
import { profileSchema } from "./documents/profile";
import { experienceSchema } from "./documents/experience";
import { projectSchema } from "./documents/project";
import { skillSchema } from "./documents/skill";
import { educationSchema } from "./documents/education";
import { postSchema } from "./documents/post";
import { categorySchema } from "./documents/category";
import { testimonialSchema } from "./documents/testimonial";
import { blockContentSchema } from "./objects/blockContent";
import { seoFieldsSchema } from "./objects/seoFields";

export const schemaTypes = [
  // Documents
  profileSchema,
  experienceSchema,
  projectSchema,
  skillSchema,
  educationSchema,
  postSchema,
  categorySchema,
  testimonialSchema,
  // Objects
  blockContentSchema,
  seoFieldsSchema,
];