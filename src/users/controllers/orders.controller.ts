import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateOrderDTO, UpdateOrderDTO } from '../dtos/orders.dto';

@Controller('orders')
export class OrdersController {

    @Get('paginated')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return{
            message: {
                message: `orders limit=> ${limit} offset=> ${offset} brand=> ${brand}`
            }
        };
    }

    @Get(':orderId')
    getOne(@Param('orderId') orderId: string) {
        return { 
            messsage: `order ${orderId}`
        };
    }

    @Post()
    create(@Body() payload: CreateOrderDTO) {
        return {
            message: 'create',
            payload,
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateOrderDTO) {
        return {
            id,
            payload,
        };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            message: `order ${id} deleted`,
        };
    }
}
