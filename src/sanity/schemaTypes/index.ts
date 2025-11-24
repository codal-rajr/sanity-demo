import { type SchemaTypeDefinition } from "sanity";
import { artistType } from "./artistType";
import { eventType } from "./eventType";
import { venueType } from "./venueType";
import { localeString } from "@/sanity/schemaTypes/localeString";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, artistType, venueType, localeString],
};
