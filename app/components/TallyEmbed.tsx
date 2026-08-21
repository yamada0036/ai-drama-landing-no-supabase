"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds?: () => void;
    };
  }
}

const FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID || "";
const FALLBACK_TALLY_URL = process.env.NEXT_PUBLIC_TALLY_DIRECT_URL || "";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com";

function getTrackingParams() {
  if (typeof window === "undefined") return new URLSearchParams();

  const current = new URL(window.location.href);
  const params = new URLSearchParams();
  const keys = ["source", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

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
  const base = FORM_ID ? `https://tally.so/embed/${FORM_ID}` : FALLBACK_TALLY_URL || "";

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

export default function ContactForm() {
  const tallySrc = useMemo(() => buildTallySrc(), []);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.Tally?.loadEmbeds?.();
  }, [tallySrc]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Free 15-sec drama concept request",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Brand website: ${data.get("brandWebsite")}`,
      `Product: ${data.get("product")}`,
      `Platform: ${data.get("platform")}`,
      "",
      `Source: ${typeof window !== "undefined" ? window.location.href : "direct"}`
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Free 15-sec drama concept request"
    )}&body=${encodeURIComponent(body)}`;

    setMessage("Opening your email client with the concept request.");
    window.location.href = mailto;
  }

  return (
    <div className="lead-form">
      <div className="form-eyebrow">Free concept request</div>
      <h2>Tell us what should be inside the scene.</h2>
      <p className="form-copy">
        Share the product and platform. The reply will focus on story, retention, product placement,
        and the first test angle.
      </p>

      {tallySrc ? (
        <div className="tally-card">
          <iframe
            data-tally-src={tallySrc}
            loading="lazy"
            width="100%"
            height="620"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="AI short drama ads contact form"
            className="tally-iframe"
          />
          <Script
            src="https://tally.so/widgets/embed.js"
            strategy="lazyOnload"
            onLoad={() => window.Tally?.loadEmbeds?.()}
          />
        </div>
      ) : (
        <form className="native-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Brand website
            <input name="brandWebsite" type="url" placeholder="https://" required />
          </label>
          <label>
            Product
            <input name="product" type="text" placeholder="Ring, AI tool, launch offer..." required />
          </label>
          <label>
            Platform
            <select name="platform" required defaultValue="">
              <option value="" disabled>
                Choose platform
              </option>
              <option>Instagram Reels</option>
              <option>YouTube Shorts</option>
              <option>TikTok</option>
              <option>Paid social</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <button className="primary-button form-button" type="submit">
            Get a free 15-sec drama concept
          </button>
          <p className="form-message">{message || "No backend is required. Add Tally env vars for live capture."}</p>
        </form>
      )}
    </div>
  );
}
