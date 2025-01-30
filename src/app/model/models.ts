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
  products: OrderItem[];
  total: number;
  date: Date;
}

export interface ShoppingCart {
  id: number;
  products: OrderItem[];
  totalPrice: number;
}

export interface OrderItem {
  product: Product;
  quantity: number;
}
export interface CartItem {
  productName: string;
  quantity?: number;
}
