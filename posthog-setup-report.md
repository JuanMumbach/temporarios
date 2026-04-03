<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js 16.2.2 App Router project (a short-term rental landing page).

## Summary of changes

- **`instrumentation-client.ts`** (new): Initializes PostHog using the recommended Next.js 15.3+ approach — runs before any client-side code, enables exception tracking, and routes events through a reverse proxy for better ad-blocker resilience.
- **`next.config.ts`** (updated): Added `/ingest/*` rewrites to proxy PostHog requests through the app, preventing ad-blockers from blocking analytics.
- **`src/components/analytics/PostHogProvider.tsx`** (updated): Removed the conflicting `useEffect`-based init (now handled by `instrumentation-client.ts`); kept as a thin `PHProvider` context wrapper.
- **`src/components/ui/BookingCTA.tsx`** (updated): Switched from `usePostHog()` hook to direct `posthog` import, compatible with the new initialization approach.
- **`src/components/sections/Gallery.tsx`** (updated): Converted to a client component and added `gallery_image_clicked` event tracking on image clicks.
- **`.env.local`** (new): Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.

## Event tracking

| Event | Description | File |
|-------|-------------|------|
| `whatsapp_booking_click` | User clicks a WhatsApp booking CTA button to initiate a booking inquiry | `src/components/ui/BookingCTA.tsx` |
| `gallery_image_clicked` | User clicks a gallery image to engage with property photos | `src/components/sections/Gallery.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/368242/dashboard/1429038
- **Total Booking Clicks (Last 30 Days)**: https://us.posthog.com/project/368242/insights/R1kcu3sU
- **WhatsApp Booking Clicks (Daily)**: https://us.posthog.com/project/368242/insights/AEuprS70
- **Gallery Image Clicks (Daily)**: https://us.posthog.com/project/368242/insights/1JjmxC3f
- **Gallery to Booking Conversion Funnel**: https://us.posthog.com/project/368242/insights/nbsNAl3t
- **Unique Users Who Booked (Weekly)**: https://us.posthog.com/project/368242/insights/2aeolgXM

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
