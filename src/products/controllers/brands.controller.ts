import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get('paginated')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return{
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
    };
  }

  @Get(':brandId')
  getOne(@Param('brandId') brandId: string) {
    return {
        message: `brand ${brandId}`
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `brand ${id} deleted`,
    };
  }
}
