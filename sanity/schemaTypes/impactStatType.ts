import { defineField, defineType } from "sanity";

export const impactStatType = defineType({
  name: "impactStat",
  title: "Impact Stat",
  type: "document",

  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
});