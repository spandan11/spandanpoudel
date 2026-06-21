# Premium Developer Portfolio

A modern, lightning-fast, and fully dynamic developer portfolio built with **Next.js App Router**, **Tailwind CSS**, **shadcn/ui**, and **Sanity CMS**.

This portfolio is designed to be a "set-it-and-forget-it" template. Once deployed, you never have to touch the code again to update your portfolio. You can manage your entire profile, projects, experience, skills, resume, and SEO directly from the embedded Sanity Studio.

## ✨ Features

- **Next.js React Server Components (RSC):** Lightning-fast page loads with aggressive server-side caching.
- **Headless CMS Integration:** Powered by Sanity. Manage all your content via a beautiful graphical interface.
- **Dynamic SEO:** Fully customizable meta titles, descriptions, keywords, and OpenGraph images directly from the CMS. Includes automated JSON-LD structured data for Google Knowledge Graph.
- **Dark/Light Mode:** Built-in seamless theme toggling using `next-themes`.
- **Premium Design:** Glassmorphism headers, smooth Framer Motion scroll animations, and minimal grid layouts.
- **PWA Ready:** Configured Web Manifest and icons for Progressive Web App support.
- **Custom 404:** A stylized, branded error page.

---

## 🚀 Quick Start (Use as a Template)

If you want to fork this project and use it as your own developer portfolio, follow these instructions:

### 1. Clone & Install
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
# or bun install / yarn install
```

### 2. Set Up Sanity CMS
This project requires a Sanity account to store your database.
1. Go to [Sanity.io](https://www.sanity.io/) and create a free account.
2. Initialize a new Sanity project or find your existing `Project ID` and `Dataset` (usually `production`).
3. Rename the `.env.example` file (or create a new `.env.local` file in the root directory) and add your keys:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

### 3. Run the Development Server
```bash
npm run dev
```
Your website is now running locally at [http://localhost:3000](http://localhost:3000).

### 4. Populate Your Data
Because the site is dynamic, it will look empty at first! You need to fill out your database.
1. Navigate to your local Sanity Studio: **[http://localhost:3000/studio](http://localhost:3000/studio)**
2. Log in with your Sanity provider.
3. Click on the **Profile** tab and fill out your name, bio, upload your avatar, and add your social links.
4. Go to **Projects**, **Experience**, and **Skills** to add your history.
5. *Tip:* Turn the "Featured" toggle ON for a project to make it appear on your home page!

Once you hit "Publish" on your Sanity documents, your Next.js landing page will instantly update!

---

## 🎨 Customizing the Design

### Changing Colors
This project uses Tailwind CSS variables for theming. To change the primary accent color (currently a deep purple/blue), open `app/globals.css` and modify the `--primary` HSL values inside the `:root` and `.dark` blocks.

### Changing Fonts
The project uses Google Fonts (`Archivo`, `Space Grotesk`, `JetBrains Mono`) optimized via `next/font`. To change these, open `app/layout.tsx`, import your desired fonts, and update the Tailwind classes in the `<body>` tag.

---

## 🚢 Deployment

The easiest way to deploy this Next.js app is on [Vercel](https://vercel.com).
1. Push your code to GitHub.
2. Import the repository into Vercel.
3. **Important:** Add your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to your Vercel Environment Variables before deploying!
4. Hit deploy.

*Note: In Sanity, remember to go to your API settings and add your new Vercel production URL to the **CORS Origins** list so the studio can communicate securely.*

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Icons:** [Lucide React](https://lucide.dev/)
