import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dtos/categories.dto';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @Get('paginated')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return{
        message: `categories limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        };
    }

    @Get('')
    getCategories() {
        return this.categoriesService.findAll();
    }

    @Get(':categoryId')
    getOne(@Param('categoryId', ParseIntPipe) categoryId: number) {
        return this.categoriesService.findOne(categoryId);
    }

    @Post()
    create(@Body() payload: CreateCategoryDTO) {
        return this.categoriesService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDTO) {
        return this.categoriesService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.remove(id);
    }
}
