export const CDN_URL = "https://cdn.alexhaight.com";

export interface CustomImage {
  original: string;
  src: string;
  width: number;
  height: number;
}

export const TREE_STUDY_IMAGES: CustomImage[] = [
  {
    src: `${CDN_URL}/home/fire_station.jpg`,
    original: `${CDN_URL}/home/fire_station.jpg`,
    width: 320,
    height: 174,
  },
  {
    src: `${CDN_URL}/home/joshua_tree.jpg`,
    original: `${CDN_URL}/home/joshua_tree.jpg`,
    width: 320,
    height: 174,
  },
  {
    src: `${CDN_URL}/home/colonnade.jpg`,
    original: `${CDN_URL}/home/colonnade.jpg`,
    width: 320,
    height: 174,
  }
]