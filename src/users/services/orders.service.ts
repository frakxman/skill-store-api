import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/orders.dto';

@Injectable()
export class OrdersService {

    private orders: Order[] = [
        {
            id: 1,
            userId: 1,
            products: [ ]
        },
        {
            id: 2,
            userId: 2,
            products: []
        },
        {
            id: 3,
            userId: 3,
            products: []
        }
    ];

    
    findAll() {
        return this.orders;
    }
    
    findOne(id: number) {
        const order = this.orders.find((item) => item.id === id);
        if (!order) throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        return order;
    }

    create(payload: CreateOrderDTO) {
        const newOrder = {
            id: this.orders.length + 1,
            ...payload
        };
        this.orders.push(newOrder);
        return newOrder;
    }
    
    update(id: number, payload: UpdateOrderDTO) {
        const order = this.findOne(id);
        if (!order) throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        const index = this.orders.findIndex((item) => item.id === id);
        this.orders[index] = {
            ...order,
            ...payload
        };
        return this.orders[index];
    }
    
    remove(id: number) {
        const index = this.orders.findIndex((item) => item.id === id);
        this.orders.splice(index, 1);
        return {
            message: 'Order deleted successfully'
        }
    }
}
