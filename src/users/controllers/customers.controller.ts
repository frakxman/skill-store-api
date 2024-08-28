import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

    @Get('paginated')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return{
            message: `customers limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        };
    }

    @Get(':customerId')
    getOne(@Param('customerId') customerId: string) {
        return { 
            messsage: `customer ${customerId}`
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
            message: `customer ${id} deleted`,
        };
    }
}
