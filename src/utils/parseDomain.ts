export function parseDomain(url: string): string | null {
  if (!url || typeof url !== "string") return "";
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/\s]+\.[^\/\s?]+)/i;
  const match = url.match(regex);
  return match ? match[1].toLowerCase() : null;
}
