export interface Vinyl {
  id: number;
  title: string;
  artist: string;
  price: number;
  genre: string;
  year: number;
  stock: number;
  cover: string;
}

export interface CartItem {
  vinyl: Vinyl;
  quantity: number;
}