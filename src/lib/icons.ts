// Technology and issuer icons from Simple Icons (CC0), resolved at build time into inline SVG paths.
// Brands that Simple Icons does not ship (Microsoft, Oracle, LinkedIn, Cambridge…) fall back to a monogram.
import * as si from 'simple-icons';

type SimpleIcon = { slug: string; title: string; hex: string; path: string };
const bySlug = new Map<string, SimpleIcon>(
  Object.values(si as Record<string, unknown>)
    .filter((x): x is SimpleIcon => !!x && typeof x === 'object' && 'slug' in (x as object))
    .map((x) => [x.slug, x]),
);

// Skill display name (from skills.json) -> Simple Icons slug.
const SKILL_SLUGS: Record<string, string> = {
  'F#': 'fsharp', 'C++': 'cplusplus', Python: 'python', Go: 'go', TypeScript: 'typescript',
  JavaScript: 'javascript', Dart: 'dart', Solidity: 'solidity',
  'ASP.NET Core': 'dotnet', '.NET Aspire': 'dotnet', Blazor: 'blazor', Angular: 'angular', React: 'react',
  'Next.js': 'nextdotjs', Flutter: 'flutter', FastAPI: 'fastapi', TensorFlow: 'tensorflow', Unity: 'unity',
  Firebase: 'firebase', Supabase: 'supabase', PostgreSQL: 'postgresql', Redis: 'redis', Stripe: 'stripe',
  Docker: 'docker', Kubernetes: 'kubernetes', 'GitHub Actions': 'githubactions', OpenTelemetry: 'opentelemetry',
  Prometheus: 'prometheus', Grafana: 'grafana', k6: 'k6', Podman: 'podman',
  'Google Cloud Platform': 'googlecloud', 'Google Sheets': 'googlesheets', 'Deep Learning': 'tensorflow',
};

// Certification issuer keyword -> slug.
const ISSUER_SLUGS: [RegExp, string][] = [
  [/CNCF|Cloud Native/i, 'cncf'],
  [/Linux Foundation/i, 'linuxfoundation'],
  [/NVIDIA/i, 'nvidia'],
];

export interface IconData { path?: string; color?: string; monogram?: string; title: string }

// Brand colours that are too dark to read on the dark theme fall back to the text colour.
function readable(hex: string): string | undefined {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum < 0.18 ? undefined : `#${hex}`;
}

function monogram(name: string): string {
  const special: Record<string, string> = { 'C#': 'C#', 'Microsoft Azure': 'Az', 'Azure DevOps': 'AD', Oracle: 'O', 'Oracle APEX': 'Ax', LinkedIn: 'in' };
  if (special[name]) return special[name];
  return name.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}

export function skillIcon(name: string): IconData | null {
  const icon = bySlug.get(SKILL_SLUGS[name] ?? '');
  if (icon) return { path: icon.path, color: readable(icon.hex), title: icon.title };
  if (['C#', 'Microsoft Azure', 'Azure DevOps', 'Oracle APEX', 'Oracle Database'].includes(name)) {
    return { monogram: monogram(name), title: name };
  }
  return null;
}

export function issuerIcon(issuer: string): IconData {
  for (const [re, slug] of ISSUER_SLUGS) {
    const icon = bySlug.get(slug);
    if (re.test(issuer) && icon) return { path: icon.path, color: readable(icon.hex), title: icon.title };
  }
  const name = issuer.split(/[ /]/)[0];
  return { monogram: monogram(name === 'LinkedIn' ? 'LinkedIn' : issuer.split('/')[0].trim()), title: issuer };
}
