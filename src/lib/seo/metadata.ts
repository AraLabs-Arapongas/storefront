import type { Metadata } from 'next';
import { SITE_NAME, LOCALE, DEFAULT_OG_IMAGE } from './site';

type PageMeta = {
  /** Path of the page, used for the canonical and og:url ("/produtos/lumo"). */
  path: string;
  /** Page title; goes through the "%s · AraLabs" template unless `absoluteTitle` is set. */
  title: string;
  /** Use the title as-is, without the template. */
  absoluteTitle?: boolean;
  description: string;
  /** Title for share previews; defaults to the full page title. */
  socialTitle?: string;
  /** Share image path. A segment's opengraph-image file takes precedence over it. */
  image?: string;
  /** Legal and support pages that exist for the stores but should stay out of Google. */
  noindex?: boolean;
};

/**
 * Metadata for a page. Next merges metadata shallowly, so a page that sets `openGraph` drops
 * every Open Graph field from the root layout (image, site name, locale) and a page without
 * `twitter` inherits the home's Twitter title. This builds both objects in full every time.
 */
export function pageMetadata({
  path,
  title,
  absoluteTitle,
  description,
  socialTitle,
  image,
  noindex,
}: PageMeta): Metadata {
  const shareTitle = socialTitle ?? (absoluteTitle ? title : `${title} · ${SITE_NAME}`);
  const images = [{ url: image ?? DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: shareTitle }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: LOCALE,
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images,
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: { index: false, follow: true },
          },
        }
      : {}),
  };
}
