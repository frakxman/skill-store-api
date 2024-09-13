import { Module } from "@nestjs/common";

// Controllers 
import { CustomersController } from "./controllers/customers.controller";
import { OrdersController } from "./controllers/orders.controller";
import { UsersController } from "./controllers/users.controller";

// Services 
import { CustomersService } from "./services/customers.service";
import { OrdersService } from "./services/orders.service";
import { UsersService } from "./services/users.service";

import { ProductsModule } from "src/products/products.module";

@Module({
    controllers: [CustomersController, OrdersController, UsersController],
    imports: [ProductsModule],
    providers: [ CustomersService, OrdersService, UsersService],
})
export class UsersModule {}