import { Module } from "@nestjs/common";

// Controllers 
import { BrandsController } from "./controllers/brands.controller";
import { CategoriesController } from "./controllers/categories.controller";
import { ProductsController } from "./controllers/products.controller";

// Services 
import { BrandsService } from "./services/brands.service";
import { CategoriesService } from "./services/categories.service";
import { ProductsService } from "./services/products.service";

@Module({
    controllers: [ProductsController, CategoriesController, BrandsController],
    exports: [ProductsService],
    providers: [ProductsService, CategoriesService, BrandsService],
})
export class ProductsModule {}