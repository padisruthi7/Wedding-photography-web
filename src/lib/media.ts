const mediaBaseUrl = process.env.NEXT_PUBLIC_MEDIA_BASE_URL?.replace(/\/+$/, "");

export function mediaUrl(path: string) {
  const normalizedPath = path.replace(/^\/+/, "");
  const fileName = normalizedPath.split("/").pop()!;

  return mediaBaseUrl
    ? `${mediaBaseUrl}/${fileName}`
    : `/${normalizedPath}`;
}

