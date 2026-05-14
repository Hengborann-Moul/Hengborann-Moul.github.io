This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Apps

### Password Generator
A secure, client-side password generator that creates strong passwords directly in your browser using the Web Crypto API. Features include:
- Configurable password length (6–64 characters)
- Toggle character sets: uppercase, lowercase, numbers, and symbols
- Real-time strength indicator (Weak → Strong)
- Password history with quick copy
- One-click copy to clipboard

### Data Tools
A curated directory of open-source data engineering tools. Browse 70+ tools across categories such as Analytics, Business Intelligence, Data Lakehouse, Stream Processing, Messaging, Workflow Management, and more. Features include:
- Full-text search by name, description, or category
- Category filtering with live counts
- Detail panels with descriptions and direct links
- One-click link copying

All tool data lives in `src/app/apps/data-tools/tools-data.ts` and is statically rendered.
