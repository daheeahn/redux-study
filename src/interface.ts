export interface Movie {
  id: number; // 필수
  rating: number; // 필수
  small_cover_image?: string;
  title: string;
}
