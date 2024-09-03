import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Controllers
import { BrandsController } from './products/controllers/brands.controller';
import { CategoriesController } from './products/controllers/categories.controller';
import { CustomersController } from './users/controllers/customers.controller';
import { OrdersController } from './users/controllers/orders.controller';
import { ProductsController } from './products/controllers/products.controller';
import { UsersController } from './users/controllers/users.controller';

// Services
import { ProductsService } from './products/services/products.service';
import { CategoriesService } from './products/services/categories.service';
import { BrandsService } from './products/services/brands.service';
import { UsersService } from './users/services/users.service';
import { CustomersService } from './users/services/customers.service';
import { OrdersService } from './users/services/orders.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, BrandsController, UsersController, OrdersController, CustomersController],
  providers: [AppService, ProductsService, CategoriesService, BrandsService, UsersService, CustomersService, OrdersService],
})
export class AppModule {}
