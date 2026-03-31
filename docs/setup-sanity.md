# Sanity CMS Setup Guide

Step-by-step guide to create and connect the Sanity project for Pordee Studio.

## Prerequisites

- Node.js 20+ installed
- A free Sanity account at [sanity.io](https://www.sanity.io/)

## Step 1: Create a Sanity Account

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Sign up with Google, GitHub, or email
3. After signing in, you'll see the Sanity dashboard

## Step 2: Create a New Sanity Project

1. In the Sanity dashboard, click **"Create new project"**
2. Enter the project name: **Pordee Studio**
3. Choose the **Free** plan (supports 3 users, 500K API requests/month, 20GB assets)
4. Select dataset name: **production** (keep the default)
5. Click **Create project**

## Step 3: Get Your Project ID

1. After creating the project, you'll see it in the dashboard
2. Click on the project name to open project settings
3. Find the **Project ID** — it looks like: `abc123de` (8 characters)
4. Copy this ID — you'll need it next

## Step 4: Configure Environment Variables

1. Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder values:

   ```env
   # For Astro (website)
   PUBLIC_SANITY_PROJECT_ID=abc123de        # Your actual Project ID
   PUBLIC_SANITY_DATASET=production

   # For Sanity Studio (local editor)
   SANITY_STUDIO_PROJECT_ID=abc123de        # Same Project ID
   SANITY_STUDIO_DATASET=production
   ```

## Step 5: Add CORS Origins

Sanity blocks requests from unknown origins by default. You need to allow your development and production URLs.

1. In the Sanity dashboard, go to your project
2. Navigate to **Settings** > **API** > **CORS origins**
3. Add these origins:

   | Origin | Allow credentials |
   |--------|-------------------|
   | `http://localhost:4321` | Yes |
   | `http://localhost:3333` | Yes |
   | `https://your-domain.pages.dev` | Yes |

   > Replace `your-domain.pages.dev` with your actual Cloudflare Pages URL once deployed.

4. Click **Add** for each origin

## Step 6: Create an API Token (Optional — for server-side builds)

This is needed if you want to access draft/unpublished content at build time. For public content only, you can skip this.

1. In the Sanity dashboard, go to **Settings** > **API** > **Tokens**
2. Click **Add API token**
3. Name it: **Astro Build (Read)**
4. Set permissions to: **Viewer** (read-only)
5. Click **Create token**
6. Copy the token and add it to your `.env`:

   ```env
   SANITY_API_TOKEN=skRe...your-token-here
   ```

   > This token is server-side only. Never expose it in client-side code.

## Step 7: Run Sanity Studio Locally

1. Start the Sanity Studio development server:

   ```bash
   npm run sanity
   ```

2. Open [http://localhost:3333](http://localhost:3333) in your browser
3. You should see the Sanity Studio with three content types:
   - **Project** — portfolio video projects
   - **Blog Post** — news and behind-the-scenes content
   - **Site Settings** — studio info, contact details, social links

## Step 8: Set Up Site Settings

1. In Sanity Studio, click **Site Settings** in the left sidebar
2. Fill in the initial content:
   - **Studio Name**: Pordee Studio
   - **Tagline (EN)**: CAPTURE WHAT YOU FEEL
   - **Tagline (TH)**: CAPTURE WHAT YOU FEEL
   - **Description (EN)**: Explore the architect's pure essence and deliver through the films.
   - **Description (TH)**: สำรวจแก่นแท้ของสถาปนิก และถ่ายทอดผ่านภาพยนตร์
   - **Email**: pordeestudio.official@gmail.com
   - **Phone**: +66 64 954 6291
   - **Instagram**: https://instagram.com/pordee.studio.official
   - **Facebook**: https://facebook.com/pordee.studio.production
   - **YouTube**: https://youtube.com/channel/UCeJOi_0rOW1SNYY4bI0rZJQ
3. Click **Publish**

## Step 9: Add Your First Project

1. Click **Project** in the left sidebar, then **Create new**
2. Fill in the fields:
   - **Title (EN)**: Your project name in English
   - **Title (TH)**: Your project name in Thai
   - **Slug**: Click "Generate" — it auto-creates from the English title
   - **YouTube Video URL**: The full YouTube URL (e.g., `https://www.youtube.com/watch?v=...`)
   - **Year**: 2024
   - **Duration**: 02:21
   - **Featured**: Toggle on if you want it on the homepage
3. Upload a **Thumbnail** image
4. Click **Publish**

## Verify

After adding content, rebuild the Astro site to see the content:

```bash
npm run build && npm run preview
```

## Troubleshooting

### "Unauthorized" error
- Check that your Project ID matches in both `.env` and the Sanity dashboard
- Ensure CORS origins include `http://localhost:4321`

### Studio shows blank page
- Make sure `.env` has the correct `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`
- Try stopping and restarting `npm run sanity`

### Content not appearing on the website
- Make sure the content is **Published** (not just a draft) in Sanity Studio
- Rebuild the Astro site: `npm run build`
