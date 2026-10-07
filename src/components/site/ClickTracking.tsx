'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

/*
 * One delegated click listener for the whole site: CTAs are plain <a> in server components, so
 * instead of wrapping each one we classify the clicked anchor by its href and send a Vercel
 * Analytics custom event. No other third parties. Renders nothing.
 */

/** Any page under a product (its slug), e.g. /produtos/lumo/suporte. */
const PRODUCT_PATH = /^\/produtos\/([^/?#]+)/;
/** The product page itself, not its legal/support subpages. */
const PRODUCT_PAGE = /^\/produtos\/([^/?#]+)\/?$/;

function label(a: HTMLAnchorElement) {
  const text = (a.textContent ?? a.getAttribute('aria-label') ?? '').replace(/\s+/g, ' ').trim();
  return text.slice(0, 40);
}

function onClick(e: MouseEvent) {
  const target = e.target as Element | null;
  const a = target?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!a) return;
  const raw = a.getAttribute('href') ?? '';
  const page = window.location.pathname;

  try {
    if (raw.startsWith('mailto:')) {
      track('cta_contact', { page, label: label(a) });
      return;
    }
    let url: URL;
    try {
      url = new URL(raw, window.location.href);
    } catch {
      return;
    }
    const host = url.hostname.replace(/^www\./, '');
    if (host === 'wa.me' || host === 'api.whatsapp.com') {
      track('cta_contact', { page, label: label(a) });
    } else if (host === 'komyx.com.br' || host.endsWith('.komyx.com.br')) {
      track('komyx_click', { page });
    } else if (host === 'apps.apple.com') {
      const fromPage = page.match(PRODUCT_PATH)?.[1];
      // App Store paths look like /br/app/<name>/id123.
      const fromLink = url.pathname.match(/\/app\/([^/]+)/)?.[1];
      track('appstore_click', { page, app: fromPage ?? fromLink ?? 'unknown' });
    } else if (host === 'arakids.aralabs.com.br') {
      track('arakids_open', { page });
    } else if (url.origin === window.location.origin) {
      const slug = url.pathname.match(PRODUCT_PAGE)?.[1];
      if (slug) track('product_nav', { from: page, to: slug });
    }
  } catch {
    /* tracking must never break navigation */
  }
}

export function ClickTracking() {
  useEffect(() => {
    // Capture phase so handlers that stop propagation (menus closing, etc.) don't hide clicks.
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
