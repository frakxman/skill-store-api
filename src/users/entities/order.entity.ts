import { Product } from "src/products/entities/product.entity";

export interface Order {
    id: number;
    userId: number;
    products: Product[];
}