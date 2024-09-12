import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dtos/categories.dto';

@Controller('categories')
export class CategoriesController {

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

    @Get(':categoryId')
    getOne(@Param('categoryId') categoryId: string) {
        return {
            message:`category ${categoryId}`
        };
    }

    @Post()
    create(@Body() payload: CreateCategoryDTO) {
        return {
            message: 'create',
            payload,
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateCategoryDTO) {
        return {
            id,
            payload,
        };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
        message: `category ${id} deleted`,
        };
    }
}
