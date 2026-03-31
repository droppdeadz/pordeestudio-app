# Sanity Webhook → Cloudflare Pages Auto-Rebuild

When content is published in Sanity Studio, the site automatically rebuilds on Cloudflare Pages.

## Step 1: Create a Cloudflare Deploy Hook

1. Go to **Cloudflare Dashboard** → **Pages** → your project
2. Click **Settings** → **Builds & deployments**
3. Under **Deploy hooks**, click **Add deploy hook**
4. Name it `sanity-publish` and select the `master` branch
5. Click **Add** and copy the generated URL (starts with `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/...`)

## Step 2: Create a Sanity Webhook

1. Go to **sanity.io/manage** → your project
2. Click **API** → **Webhooks** → **Create webhook**
3. Configure:
   - **Name**: `Cloudflare Pages Rebuild`
   - **URL**: paste the Cloudflare deploy hook URL from Step 1
   - **Dataset**: `production`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: leave blank (triggers on all document changes)
   - **HTTP method**: `POST`
   - **HTTP Headers**: none needed
   - **Secret**: leave blank (Cloudflare deploy hooks don't require auth)
4. Click **Save**

## Step 3: Test

1. Open Sanity Studio and edit any document (e.g., change a project title)
2. Click **Publish**
3. Go to Cloudflare Pages dashboard — a new deployment should appear within ~30 seconds
4. Once built, verify the change is live on the site

## Notes

- Cloudflare Pages builds take ~1-2 minutes for this site
- The webhook fires on every publish event — if you're making many changes, the latest build will include all changes
- If the webhook stops working, check the Sanity webhook logs at **sanity.io/manage** → **API** → **Webhooks** → click the webhook → **Recent deliveries**
