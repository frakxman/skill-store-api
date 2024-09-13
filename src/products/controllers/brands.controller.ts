import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateBrandDTO, UpdateBrandDTO } from '../dtos/brands.dto';
import { BrandsService } from '../services/brands.service';

@Controller('brands')
export class BrandsController {

  constructor(private brandService: BrandsService) { }

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

  @Get('')
  getBrands() {
    return this.brandService.findAll();
  }

  @Get(':brandId')
  getOne(@Param('brandId', ParseIntPipe) brandId: number) {
    return this.brandService.findOne(brandId);
  }

  @Post()
  create(@Body() payload: CreateBrandDTO) {
    return this.brandService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateBrandDTO) {
    return this.brandService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.remove(id);
  }
}
