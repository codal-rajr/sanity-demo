import { client } from "@/sanity/client";
import { defineLive } from "next-sanity/live";
const token = process.env.SANITY_VIEWER_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
  serverToken: token,
  browserToken: token,
});