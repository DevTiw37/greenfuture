import { type SchemaTypeDefinition } from "sanity";
import { programType } from "./programType";
import { impactStatType } from "./impactStatType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType, impactStatType],
};