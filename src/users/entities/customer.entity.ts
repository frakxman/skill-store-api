import { Order } from "./order.entity";

export interface Customer {
    id: number;
    name: string;
    email: string;
    password: string;
    orders: Order[];
}