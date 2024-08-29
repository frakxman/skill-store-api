import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 100,
      image: 'https://picsum.photos/640/640?r=1'
    },
    { id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stock: 100,
      image: 'https://picsum.photos/640/640?r=2'
    },
    { id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      stock: 100,
      image: 'https://picsum.photos/640/640?r=3'
    }
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw new HttpException('Product not found', HttpStatus.NOT_FOUND );
    return product;
  }

  create(payload: any) {
    const newProduct = {
      id: this.products.length + 1,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (!product) throw new HttpException('Product not found', HttpStatus.NOT_FOUND );
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload
    }
    return this.products[index];
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Product #${id} not found`);
    this.products.splice(index, 1);
    return {
      message: `Product #${id} has been removed`
    };
  }
}
