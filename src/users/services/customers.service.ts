import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { Order } from '../entities/order.entity';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            name: '',
            email: '',
            password: '',
            orders: [],
        },
        {
            id: 2,
            name: '',
            email: '',
            password: '',
            orders: [],
        },
        {
            id: 3,
            name: '',
            email: '',
            password: '',
            orders: [],
        },
    ];

    findAll() {
        return this.customers;
    }

    findOne(id: number) {
        const customer = this.customers.find((item) => item.id === id);
        if (!customer) throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
        return customer;
    }

    create(payload: Customer) {
        const newCustomer = {
            id: this.customers.length + 1,
            ...payload,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

    update(id: number, payload: Customer) {
        const customer = this.findOne(id);
        if (!customer) throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
        const index = this.customers.findIndex((item) => item.id === id);
        this.customers[index] = {
            ...customer,
            ...payload,
        };
        return this.customers[index];
    }

    remove(id: number) {
        const index = this.customers.findIndex((item) => item.id === id);
        this.customers.splice(index, 1);
        return {
            message: 'Customer deleted successfully',
        };
    }
}
