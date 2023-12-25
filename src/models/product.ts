export interface Product {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  category: string;
  categoryName: string;
  name: string;
}

export interface ProductDetail extends Product {
  description: string;
  images: string[];
  price_id: string;
}

export interface ProductCart {
  price_id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}
