import { CustomImage } from "../utils/contants";

export type ImageItem = {
  key: string;
  url: string;
};

type FetchImagesResponse = {
  items: ImageItem[];
  nextToken: string | null;
};

export async function* fetchImagesStream(
  folder: string,
  limit: number = 20
): AsyncGenerator<ImageItem[]> {
  let nextToken: string | undefined = undefined;

  do {
    const params = new URLSearchParams({
      folder,
      limit: limit.toString(),
    });
    if (nextToken) params.append('token', nextToken);

    const response = await fetch(`https://api.alexhaight.com?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`Error fetching images: ${response.statusText}`);
    }

    const data: { items: ImageItem[]; nextToken: string | null } = await response.json();

    yield data.items;

    nextToken = data.nextToken ?? undefined;
  } while (nextToken);
}

export async function fetchProjectImages(
    projectName: string,
    maxPages = 3
): Promise<CustomImage[]> {
  const images: CustomImage[] = [];

  for await (const page of fetchImagesStream(`work/${projectName}`, maxPages)) {
    images.push(
      ...page.map((p) => ({
          src: p.url,
          original: p.url,
          height: 120,
          width: 150,
      }))
    );
  }
  return images;
}
