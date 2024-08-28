import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';


@Injectable()
export class ProductsService {
    private counter = 0;
    private products: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is product 1',
            price: 100,
            image: '',
            stock: 10
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is product 2',
            price: 200,
            image: '',
            stock: 10
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is product 3',
            price: 300,
            image: '',
            stock: 10
        },
    ];
    
    findAll() {
        return this.products;
    }
    
    findOne(id: number) {
        return this.products.find((product) => product.id === id);
    }

    create(payload: any) {
        this.counter += 1;
        const newProduct = {
            id: this.counter,
            ...payload
        };
        this.products.push(newProduct);
        return newProduct;
    }
    
    update(id: number, payload) {
        const product = this.findOne(id);
        this.products[product.id] = payload;
    }
    
    remove(id: number) {
        this.products = this.products.filter((product) => product.id !== id);
    }
}
