/**
 * src/config/nav.ts
 *
 * Blog posts are derived automatically from src/content/blog/*.md
 * CV pages are discovered automatically from src/pages/cv/*.astro
 *
 * This file controls:
 *   - Site display name
 *   - CV page metadata (icon + display order)
 *   - External links
 */

export const SITE_TITLE = "~/dev.blog";

/**
 * Metadata for each CV page.
 * Key = filename without extension (must match the .astro file in src/pages/cv/)
 * Pages are rendered in the order they appear here.
 * Any CV page NOT listed here still appears, sorted alphabetically after listed ones,
 * with a default icon.
 */
export const CV_PAGE_META: Record<string, { icon: string; label?: string }> = {
  index: { icon: "📄", label: "index.astro" },
  experience: { icon: "💼" },
  skills: { icon: "🛠️" },
  projects: { icon: "🚀" },
  hobbies: { icon: "🎵" },
  achievements: { icon: "🏆" },
  contact: { icon: "📧" },
};

/** Default icon for CV pages not in CV_PAGE_META */
export const CV_DEFAULT_ICON = "📄";

/** External links shown in the external/ section */
export const EXTERNAL_LINKS: Array<{
  label: string;
  href: string;
  icon: string;
}> = [
  { label: "github.link", href: "https://github.com/pranavm7/", icon: "🔗" },
  {
    label: "linkedin.link",
    href: "https://www.linkedin.com/in/pranav-m7",
    icon: "🔗",
  },
];
