import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
      image: 'https://picsum.photos/640/640?r=11'
    },
    {
      id: 2,
      name: 'Brand 2',
      image: 'https://picsum.photos/640/640?r=12'
    },
    {
      id: 3,
      name: 'Brand 3',
      image: 'https://picsum.photos/640/640?r=13'
    }
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
    return brand;
  }

  create(payload: any) {
    const newBrand = {
      id: this.brands.length + 1,
      ...payload
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: any) {
    const brand = this.findOne(id);
    if (!brand) throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...payload
    };
    return this.brands[index];
  }

  remove(id: number) {
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands.splice(index, 1);
    return {
      message: `Brand #${id} has been removed`
    };
  }
}
