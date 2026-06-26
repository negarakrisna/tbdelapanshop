export type ProductDescription = {
  overview?: string;
  features?: string[];
  package?: string[];
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand?: string;
  category?: string;

  price: number;
  discountPrice?: number;
  discountLabel?: string;

  images: string[];

  description?: ProductDescription;
  specifications?: Record<string, string>;

  weight?: number;
  unit?: string;
  isAvailable?: boolean;
};