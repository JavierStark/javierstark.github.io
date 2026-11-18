// Versioned CV link. The file name never changes, so browsers and the CDN keep serving a stale PDF for hours after
// an update (Cache-Control: max-age=14400). A content hash in the query string gives every new CV a new URL and an
// unchanged CV the same one. Build-time only: components call it from their frontmatter.
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

export function cvHref(file: string): string {
  try {
    const hash = createHash('sha1').update(readFileSync(`public/${file}`)).digest('hex').slice(0, 8);
    return `/${file}?v=${hash}`;
  } catch {
    return `/${file}`;
  }
}
