# GreenFuture

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=flat&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green.svg)

GreenFuture is a sustainability-focused community platform that helps people discover environmental programs, learn about local impact, and get involved in creating a greener future.

## Live Website

[https://greenfuture-mu.vercel.app/](https://greenfuture-mu.vercel.app/)

## GitHub Repository

[https://github.com/DevTiw37/greenfuture](https://github.com/DevTiw37/greenfuture)

## Overview

GreenFuture is built as a modern, production-ready web application with a focus on:

- Sustainability and environmental awareness
- Community participation
- Environmental programs and initiatives
- Impact tracking
- Contact and community engagement
- Responsive and accessible user experience

## Main Pages

- --Home-- — Introduction to GreenFuture and featured programs
- --About-- — Information about the organization
- --Programs-- — Sustainability programs and initiatives
- --Impact-- — Community impact statistics
- --Contact-- — Contact form for community messages

## Technology Stack

### Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Content Management

- Sanity CMS

### Database

- Supabase

### Email

- Resend

### Hosting

- Vercel

### Source Control & CI

- GitHub
- GitHub Actions

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 22+
- npm
- Git

### Clone the Repository

```bash
git clone [https://github.com/DevTiw37/greenfuture.git](https://github.com/DevTiw37/greenfuture.git)
cd greenfuture

```

### Install Dependencies

```bash
npm install

```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL="[https://greenfuture-mu.vercel.app](https://greenfuture-mu.vercel.app)"

NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"

NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="your_supabase_publishable_key"

RESEND_API_KEY="your_resend_api_key"

```

Replace the placeholder values with your own credentials.

--Never commit `.env.local` or expose API keys in the repository.--

### Run the Development Server

```bash
npm run dev

```

Open:

```text
http://localhost:3000

```

### Production Build

To create a production build locally:

```bash
npm run build

```

To run the production build:

```bash
npm start

```

## Sanity CMS

GreenFuture uses Sanity as its content management system.

The Sanity Studio is available at:

```text
http://localhost:3000/studio

```

when running the application locally.

### Content Types

The project currently uses the following Sanity content types:

#### Program

Programs contain:

- Title
- Description
- Icon
- Slug

Current programs include:

- Community Tree Planting
- School Sustainability Workshops
- Community Micro-Grants

#### Impact Stat

Impact statistics contain:

- Value
- Label
- Display order

These statistics are displayed on the Impact page.

### Sanity Environment Variables

The project requires:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"

```

The Sanity project ID and dataset should be configured in `.env.local` for local development and in Vercel for production.

## Supabase

GreenFuture uses Supabase to store contact form submissions.

### Database Table

The application uses a `contact_messages` table with the following fields:

| Column | Type | Description |
| --- | --- | --- |
| `id` | bigint | Primary key |
| `name` | text | Sender's name |
| `email` | text | Sender's email |
| `message` | text | Contact message |
| `created_at` | timestamptz | Submission timestamp |

### Row Level Security

Row Level Security (RLS) is enabled on the table.

The application allows anonymous users to insert contact messages through the public contact form while preventing unrestricted public access to stored messages.

### Supabase Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="your_supabase_publishable_key"

```

These values must be configured in .env.local for local development and in Vercel for production.

## Email Notifications

GreenFuture uses Resend to send email notifications when a visitor submits the contact form.

The contact submission flow is:

1. Visitor submits the contact form.
2. The message is validated by the API.
3. The message is stored in Supabase.
4. A notification email is sent using Resend.
5. The visitor receives a success response.

### Resend Environment Variable

```env
RESEND_API_KEY="your_resend_api_key"

```

The API key must be configured locally in .env.local and in Vercel for production.

The current implementation uses Resend's development sender:

```text
onboarding@resend.dev

```

For a production deployment with a custom domain, configure and verify a domain in Resend and use a verified sender address.

## Contact Form API

The contact form sends submissions to:

```text
POST /api/contact

```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to learn more about your programs."
}

```

### Validation

The API validates:

- Required fields
- Email format
- Maximum name length
- Maximum email length
- Maximum message length
- Honeypot field for basic bot protection

The API returns an appropriate response when validation fails or when the submission is successfully processed.

### Security

The contact form uses:

- Server-side input validation
- Supabase Row Level Security
- Honeypot bot protection
- Environment variables for private credentials

For production-scale traffic, additional rate limiting can be added to the API route.

## CI/CD

The project uses GitHub Actions for continuous integration.

The workflow is located at:

```text
.github/workflows/ci.yml

```

On pushes and pull requests targeting the `master` branch, GitHub Actions:

1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs the project's dependencies.
4. Runs the production build.
5. Fails the workflow if the build fails.

The workflow uses GitHub repository secrets for required environment variables.

### GitHub Deployment Flow

The GitHub repository is connected to Vercel.

When changes are pushed to `master`:

```text
GitHub
    ↓
GitHub Actions
    ↓
Production Build
    ↓
Vercel Deployment

```

This provides automated build validation and production deployment.

## Performance & Rendering

GreenFuture uses Next.js rendering features to balance performance with fresh CMS content.

### Static Generation

The following pages are statically generated:

- About
- Contact
- Robots
- Sitemap

### Incremental Static Regeneration

CMS-driven pages use a 60-second revalidation period:

- Home
- Programs
- Impact
- Individual Program pages

This allows content managed through Sanity to be refreshed without rebuilding the entire application.

### Program Pages

Program detail pages use `generateStaticParams()` to pre-render known program slugs during the production build.

### Responsive Design

The interface is designed to work across:

- Mobile devices
- Tablets
- Desktop screens

### Accessibility

The application includes:

- Semantic navigation landmarks
- Keyboard-focus indicators
- Skip-to-content navigation
- Accessible mobile navigation controls
- Form labels
- Custom loading and error states

## Project Structure

```text
greenfuture/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── impact/
│   │   └── page.tsx
│   ├── services/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── studio/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── Footer.tsx
│   ├── ImpactStat.tsx
│   ├── Navbar.tsx
│   └── ProgramCard.tsx
│
├── lib/
│   └── supabase.ts
│
├── sanity/
│   ├── lib/
│   └── schemaTypes/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── public/
│
├── next.config.ts
├── package.json
└── README.md

```

> `.env.local` contains private credentials and is excluded from version control.

## Vercel Deployment

GreenFuture is deployed on Vercel.

### Production URL

[https://greenfuture-mu.vercel.app/](https://greenfuture-mu.vercel.app/)

### Deployment Flow

The project is connected to the GitHub repository. Changes pushed to the `master` branch trigger the deployment pipeline.

```text
Developer
    ↓
Git Commit
    ↓
GitHub (master)
    ↓
GitHub Actions
    ↓
Build Validation
    ↓
Vercel
    ↓
Production

```

### Production Environment Variables

The following variables are configured in Vercel:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
RESEND_API_KEY

```

Secret values are not stored in the repository.

## Testing & Quality Checks

Before pushing changes, the project can be checked with:

 Production Build

```bash
npm run build
```

This verifies that the application compiles successfully and that the Next.js production build can be generated.

### CI Validation

Every push and pull request targeting `master` is validated through GitHub Actions.

### Manual UI Verification

The main user flows should be checked before release:

- Navigation between pages
- Responsive mobile navigation
- Program detail pages
- Contact form submission
- Contact form validation
- Custom 404 page
- Keyboard navigation
- Sitemap and robots.txt

## Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the production build:

    ```bash
    npm run build
    ```

5. Commit your changes.
6. Open a pull request.

## License

This project was created as a GreenFuture web development project.

The project is currently intended for educational and portfolio purposes.
