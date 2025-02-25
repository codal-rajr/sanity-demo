import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";
const token = process.env.SANITY_VIEWER_TOKEN;

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "vX" }),
  serverToken: token,
  browserToken: token,
});