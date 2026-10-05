This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Media storage

The website supports local development media and optimized media hosted in Cloudflare R2.
Original high-resolution wedding files should remain in Google Drive and should not be
committed to GitHub or deployed with Vercel.

For local development, leave `NEXT_PUBLIC_MEDIA_BASE_URL` empty. The application then
uses the existing files under `public/images`.

For R2 delivery, upload optimized website media while preserving the `images/` path
structure, connect a production custom domain to the R2 bucket, and set:

```env
NEXT_PUBLIC_MEDIA_BASE_URL=https://media.example.com
```

The application keeps the existing gallery, lightbox, video player, layout, and
animations. It only changes the base URL used for media files.

This integration does not need an R2 SDK or server credential because website media is
delivered through public read-only URLs. Never put R2 access keys or Google credentials
in `NEXT_PUBLIC_MEDIA_BASE_URL`.

Recommended workflow:

1. Keep original files in Google Drive as the archive.
2. Create optimized web copies locally without overwriting the originals.
3. Upload only the optimized copies to R2 after confirming the file list.
4. Keep write credentials outside the app and outside GitHub.
5. Add `NEXT_PUBLIC_MEDIA_BASE_URL` to Vercel after the R2 custom domain is ready.

## Future Cloudflare R2 Migration

### Already prepared locally

- Media paths are centralized through `src/lib/media.ts`.
- Empty `NEXT_PUBLIC_MEDIA_BASE_URL` keeps the existing local `/images` files working.
- A future public R2 base URL can replace the local base without changing the page design.
- Portfolio and video thumbnails use lazy browser loading.
- Video files are loaded only after the existing Play button is selected, with `preload="metadata"`.
- Remote thumbnail and homepage image failures retry the original local path.
- `.env` files and future local media additions are ignored by Git.
- No R2 credentials, account, bucket, or upload is required for local development.

### Future media organization

Keep originals in Google Drive and create separate optimized website copies. The R2
object paths should preserve the current path shape so the application can use the same
manifest and references:

```text
images/wedding/
images/prewedding/
images/bride/
images/drone/
images/birthday/
images/portfolio-thumbnails/
images/videos/
```

Use WebP or AVIF thumbnails for galleries and appropriately compressed MP4 files for
web playback. Keep original camera files in Google Drive rather than R2 or GitHub.

### Future configuration

After an R2 public custom domain exists, set this variable locally or in Vercel:

```env
NEXT_PUBLIC_MEDIA_BASE_URL=https://media.example.com
```

Do not put R2 access keys, secret keys, API tokens, or Google credentials in this
variable. The current public-media design does not need credentials in the browser.

### Future migration checklist

- [ ] Create the R2 account and bucket after reviewing expected costs.
- [ ] Configure a production custom domain and public read access.
- [ ] Prepare optimized copies from Google Drive originals in a separate local folder.
- [ ] Review the exact upload list and total size before uploading.
- [ ] Upload a small approved test set first.
- [ ] Verify image URLs, thumbnails, lightbox URLs, and video range playback.
- [ ] Upload the remaining approved optimized website media.
- [ ] Set `NEXT_PUBLIC_MEDIA_BASE_URL` in local and Vercel environments.
- [ ] Run the production build and check the deployed pages.
- [ ] Monitor storage, requests, bandwidth, and monthly cost.

This checklist is documentation only. It has not been executed.

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
