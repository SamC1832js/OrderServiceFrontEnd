export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface Order {
  id: number;
  products: Product[];
  total: number;
  date: Date;
}

export interface ShoppingCart {
  id: number;
  products: Product[];
  total: number;
}
