#!/usr/bin/env node
// Notifies IndexNow (Bing, Yandex, Seznam, Naver...) with every URL in the sitemap.
// Usage: node scripts/indexnow.mjs [--dry-run]
// Env: SITE (default https://aralabs.com.br), INDEXNOW_KEY (default: key below).
// The key file must be served at `${SITE}/${KEY}.txt` (see public/).

const DEFAULT_KEY = 'a14800f5d76d46ea51a13cec3d1b9702';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS = 10_000;

const dryRun = process.argv.includes('--dry-run');
const site = (process.env.SITE || 'https://aralabs.com.br').replace(/\/+$/, '');
const key = process.env.INDEXNOW_KEY || DEFAULT_KEY;
const { host } = new URL(site);

async function sitemapUrls() {
  const res = await fetch(`${site}/sitemap.xml`, { headers: { 'user-agent': 'aralabs-indexnow' } });
  if (!res.ok) throw new Error(`sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map((m) =>
    m[1]
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'"),
  );
  return [...new Set(urls)].filter((u) => {
    try {
      return new URL(u).host === host;
    } catch {
      return false;
    }
  });
}

async function main() {
  const urlList = await sitemapUrls();
  if (urlList.length === 0) throw new Error('no <loc> URLs found in sitemap');
  if (urlList.length > MAX_URLS) throw new Error(`too many URLs (${urlList.length} > ${MAX_URLS})`);

  const payload = { host, key, keyLocation: `${site}/${key}.txt`, urlList };
  console.log(`IndexNow: ${urlList.length} URL(s) for ${host}`);

  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
    console.log('--dry-run: nothing sent');
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  const body = await res.text().catch(() => '');
  console.log(`IndexNow response: HTTP ${res.status} ${res.statusText}${body ? ` - ${body}` : ''}`);
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}

main().catch((err) => {
  console.error(`IndexNow error: ${err.message}`);
  process.exit(1);
});
