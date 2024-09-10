import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { CreateProductDTO } from '../dtos/products.dto';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) { }

  // Without Service
  // @Get('')
  // getProducts(
    // @Query('limit') limit: 25,
    // @Query('offset') offset: 0,
    // @Query('brand') brand: string
    // ) {
    // return {
    //   message: `products limit: ${limit}, offset: ${offset}, brand: ${brand}`
    // };
  // }

  // With Service
  @Get('')
  getProducts() {
    return this.productsService.findAll();
  }

  @Get(':productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post('')
  createProduct(@Body() payload: CreateProductDTO ) {
    return this.productsService.create(payload);
  }

  // @Patch(':productId')
  @Put(':productId')
  updateProduct(@Param('productId', ParseIntPipe) productId: number, @Body() payload: any ) {
    return this.productsService.update(productId, payload);
  }

  @Delete(':productId')
  deleteProduct(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.remove(productId);
  }
}

