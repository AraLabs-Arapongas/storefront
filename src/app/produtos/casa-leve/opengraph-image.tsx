import { productBySlug } from '@/lib/products';
import { productOgImage } from '@/lib/seo/productOg';

const product = productBySlug('casa-leve');

export const alt = `${product.name}: ${product.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return productOgImage(product);
}
