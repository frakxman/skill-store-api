import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateCustomerDTO, UpdateCustomerDTO } from '../dtos/customers.dto';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private readonly customersService: CustomersService) {}

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

    @Get('')
    getCustomers() {
        return this.customersService.findAll();
    }

    @Get(':customerId')
    getOne(@Param('customerId', ParseIntPipe) customerId: number) {
        return this.customersService.findOne(customerId);
    }

    @Post()
    create(@Body() payload: CreateCustomerDTO) {
        return this.customersService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDTO) {
        return this.customersService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.customersService.remove(id);
    }
}
