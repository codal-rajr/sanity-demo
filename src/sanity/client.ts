import { createClient } from "next-sanity";
import { projectId, dataset } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-11-01",
  useCdn: true,
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});
