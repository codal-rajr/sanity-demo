import { type SchemaTypeDefinition } from "sanity";
import { artistType } from "./artistType";
import { eventType } from "./eventType";
import { venueType } from "./venueType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, artistType, venueType],
};
