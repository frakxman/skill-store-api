import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {

  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Description 1',
      image: 'https://picsum.photos/640/640?r=1'
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Description 2',
      image: 'https://picsum.photos/640/640?r=2'
    },
    {
      id: 3,
      name: 'Category 3',
      description: 'Description 3',
      image: 'https://picsum.photos/640/640?r=3'
    }
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) throw new HttpException('Category not found', HttpStatus.NOT_FOUND );
    return category;
  }

  create(payload: CreateCategoryDTO) {
    const newCategory = {
      id: this.categories.length + 1,
      ...payload
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDTO) {
    const category = this.findOne(id);
    if (!category) throw new HttpException('Category not found', HttpStatus.NOT_FOUND );
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...category,
      ...payload
    };
    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Category #${id} not found`);
    this.categories.splice(index, 1);
    return {
      message: `Category #${id} has been removed`
    }
  }

}
