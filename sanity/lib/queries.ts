import { groq } from "next-sanity";

export const programsQuery = groq`
  *[_type == "program"] | order(_createdAt asc) {
    _id,
    title,
    description,
    icon,
    slug
  }
`;

export const impactStatsQuery = groq`
  *[_type == "impactStat"] | order(order asc) {
    _id,
    value,
    label,
    order
  }
`;