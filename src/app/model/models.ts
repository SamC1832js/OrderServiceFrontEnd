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
  imgUrl: string;
  category: string;
  brand: string;
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
