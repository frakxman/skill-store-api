import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from '../services/products/products.service';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
    // };
    return this.productsService.findAll()
  }

  @Get(':productId')
  getOne(@Param('productId') productId: number) {
    // return {
    //   message: `product ${productId}`
    // };
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'create',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // return {
    //   message: `product ${id} deleted`,
    // };
    return this.productsService.remove(id);
  }
}
