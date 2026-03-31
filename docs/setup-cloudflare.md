# Cloudflare Pages Setup Guide

Step-by-step guide to deploy the Pordee Studio website to Cloudflare Pages.

## Prerequisites

- A free Cloudflare account at [cloudflare.com](https://www.cloudflare.com/)
- The project repository pushed to GitHub

## Step 1: Create a Cloudflare Account

1. Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up with email
3. After verifying your email, you'll see the Cloudflare dashboard

## Step 2: Push Code to GitHub

Make sure all your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "feat: initialize pordee studio website"
git push origin master
```

## Step 3: Create a Cloudflare Pages Project

1. In the Cloudflare dashboard, click **Workers & Pages** in the left sidebar
2. Click **Create**
3. Select the **Pages** tab
4. Click **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select the **pordeestudio-app** repository
7. Click **Begin setup**

## Step 4: Configure Build Settings

On the build configuration page, set the following:

| Setting | Value |
|---------|-------|
| **Project name** | pordeestudio |
| **Production branch** | master |
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | 20 |

> The framework preset "Astro" should auto-fill the build command and output directory.

## Step 5: Set Environment Variables

On the same page, expand **Environment variables** and add:

| Variable name | Value |
|---------------|-------|
| `PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID (e.g., `abc123de`) |
| `PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | Your Sanity read token (optional) |
| `NODE_VERSION` | `20` |

> Add these for **both** Production and Preview environments.

## Step 6: Deploy

1. Click **Save and Deploy**
2. Cloudflare will clone the repo, install dependencies, and build the site
3. Wait for the build to complete (usually 30-60 seconds)
4. Once deployed, you'll get a URL like: `https://pordeestudio.pages.dev`

## Step 7: Verify Deployment

1. Visit your Cloudflare Pages URL
2. Check that:
   - The dark homepage loads with the tagline
   - The logo appears in the header
   - Navigation links are visible
   - The language toggle works (switch between `/en/` and `/th/`)
   - The footer shows social links

## Step 8: Add CORS Origin to Sanity

Now that you have a production URL, add it to Sanity's CORS origins:

1. Go to [sanity.io/manage](https://www.sanity.io/manage) > your project > **Settings** > **API** > **CORS origins**
2. Add: `https://pordeestudio.pages.dev` (or your custom domain)
3. Enable **Allow credentials**

## Step 9: Set Up Custom Domain (Optional)

1. In the Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `pordeestudio.com`)
4. Follow the DNS setup instructions:
   - If the domain is already on Cloudflare: it will auto-configure
   - If the domain is elsewhere: add a CNAME record pointing to `pordeestudio.pages.dev`
5. Wait for SSL certificate provisioning (usually 1-5 minutes)

## Step 10: Set Up Auto-Deploy Webhook from Sanity (Phase 4)

This will be configured later to trigger a rebuild when content is published in Sanity.

1. In Cloudflare Pages project, go to **Settings** > **Builds & deployments**
2. Scroll to **Deploy hooks**
3. Click **Add deploy hook**
4. Name it: **Sanity Content Update**
5. Branch: **master**
6. Copy the webhook URL (looks like: `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/...`)
7. In Sanity dashboard: go to **Settings** > **API** > **Webhooks**
8. Add a new webhook:
   - **Name**: Cloudflare Deploy
   - **URL**: Paste the Cloudflare webhook URL
   - **Trigger on**: Create, Update, Delete
   - **Filter**: Leave blank (triggers on all content changes)
9. Save the webhook

Now whenever you publish content in Sanity, the website will automatically rebuild and deploy.

## Troubleshooting

### Build fails
- Check the build logs in Cloudflare Pages for error details
- Ensure `NODE_VERSION` is set to `20` in environment variables
- Verify that `PUBLIC_SANITY_PROJECT_ID` is set correctly

### Site shows blank or error
- Check browser console for errors
- Ensure Sanity CORS origins include your Pages URL
- Try triggering a manual redeploy from the Cloudflare dashboard

### Custom domain not working
- DNS propagation can take up to 24 hours (usually much faster)
- Ensure the CNAME record points to your `*.pages.dev` domain
- Check that SSL certificate is active in Cloudflare dashboard
