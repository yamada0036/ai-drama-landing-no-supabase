"use client";

import Script from "next/script";
import { useEffect, useMemo } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds?: () => void;
    };
  }
}

const FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID || "";
const FALLBACK_TALLY_URL = process.env.NEXT_PUBLIC_TALLY_DIRECT_URL || "";

function getTrackingParams() {
  if (typeof window === "undefined") return new URLSearchParams();

  const current = new URL(window.location.href);
  const params = new URLSearchParams();

  const keys = [
    "source",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term"
  ];

  for (const key of keys) {
    const value = current.searchParams.get(key);
    if (value) params.set(key, value);
  }

  params.set("page_url", window.location.href);
  params.set("landing_path", window.location.pathname);

  if (!params.get("source")) {
    params.set("source", params.get("utm_source") || "direct");
  }

  return params;
}

function buildTallySrc() {
  const base = FORM_ID
    ? `https://tally.so/embed/${FORM_ID}`
    : FALLBACK_TALLY_URL || "";

  if (!base) return "";

  const url = new URL(base);
  url.searchParams.set("alignLeft", "1");
  url.searchParams.set("hideTitle", "1");
  url.searchParams.set("transparentBackground", "1");
  url.searchParams.set("dynamicHeight", "1");

  const tracking = getTrackingParams();
  tracking.forEach((value, key) => url.searchParams.set(key, value));

  return url.toString();
}

export default function TallyEmbed() {
  const tallySrc = useMemo(() => buildTallySrc(), []);

  useEffect(() => {
    window.Tally?.loadEmbeds?.();
  }, [tallySrc]);

  return (
    <div className="lead-form tally-card" id="join">
      <div className="form-eyebrow">Free early access</div>
      <h2>Join the Drama Club</h2>
      <p className="form-copy">
        Get new episode alerts, vote on the next twist, and join the VIP early access waitlist.
      </p>

      {tallySrc ? (
        <>
          <iframe
            data-tally-src={tallySrc}
            loading="lazy"
            width="100%"
            height="560"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="AI Drama Club signup form"
            className="tally-iframe"
          />
          <Script
            src="https://tally.so/widgets/embed.js"
            strategy="lazyOnload"
            onLoad={() => window.Tally?.loadEmbeds?.()}
          />
        </>
      ) : (
        <div className="tally-placeholder">
          <strong>Connect your Tally form</strong>
          <p>
            Add <code>NEXT_PUBLIC_TALLY_FORM_ID</code> in Vercel or <code>.env.local</code>, then this
            card will become your live embedded signup form.
          </p>
          <a className="primary-button form-button" href="https://tally.so" target="_blank" rel="noreferrer">
            Create Tally form
          </a>
        </div>
      )}

      <p className="form-message">Tracking source, UTM campaign, and page URL are passed as hidden fields.</p>
    </div>
  );
}
