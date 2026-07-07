// Maps a service's `iconName` (set in Sanity) to a Phosphor icon.
// Falls back to a gear so an unmapped service never renders empty.
const SERVICE_ICONS: Record<string, string> = {
  ac: 'ph:snowflake',
  install: 'ph:wrench',
  heating: 'ph:flame',
  'air-quality': 'ph:wind',
  commercial: 'ph:buildings',
};

export function serviceIcon(name: string | undefined): string {
  if (!name) return 'ph:gear-six';
  return SERVICE_ICONS[name] ?? 'ph:gear-six';
}
