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
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "zqx0310liubo@gmail.com";

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
  if (!params.get("source")) params.set("source", params.get("utm_source") || "direct");

  return params;
}

function buildTallySrc() {
  const base = FORM_ID ? `https://tally.so/embed/${FORM_ID}` : FALLBACK_TALLY_URL;
  if (!base) return "";

  const url = new URL(base);
  url.searchParams.set("alignLeft", "1");
  url.searchParams.set("hideTitle", "1");
  url.searchParams.set("transparentBackground", "1");
  url.searchParams.set("dynamicHeight", "1");

  getTrackingParams().forEach((value, key) => url.searchParams.set(key, value));
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
      "Paid AI microdrama pilot enquiry",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Brand website: ${data.get("brandWebsite")}`,
      `Product: ${data.get("product")}`,
      `Platform: ${data.get("platform")}`,
      `Project brief: ${data.get("brief")}`,
      "",
      `Source: ${typeof window !== "undefined" ? window.location.href : "direct"}`
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Paid AI microdrama pilot enquiry"
    )}&body=${encodeURIComponent(body)}`;

    setMessage("Opening your email app with the project details.");
    window.location.href = mailto;
  }

  return (
    <div className="lead-form">
      <p className="form-label">Project enquiry</p>
      <h3>Start with one scene.</h3>

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
            title="AI microdrama project enquiry"
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
            Work email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Brand website
            <input name="brandWebsite" type="url" placeholder="https://" required />
          </label>
          <label>
            Product
            <input name="product" type="text" placeholder="Jewellery, beauty, app, AI tool…" required />
          </label>
          <label>
            Target platform
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
          <label>
            Project brief
            <textarea
              name="brief"
              rows={4}
              placeholder="What should the audience feel, remember or do?"
              required
            />
          </label>
          <button className="submit-button" type="submit">
            Send project enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="form-message">{message || "You will receive a reply by email."}</p>
        </form>
      )}
    </div>
  );
}
