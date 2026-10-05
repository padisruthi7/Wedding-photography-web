const mediaBaseUrl = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/+$/, "");

export function mediaUrl(path: string) {
  const normalizedPath = path.replace(/^\/+/, "");
  return mediaBaseUrl ? `${mediaBaseUrl}/${normalizedPath}` : `/${normalizedPath}`;
}