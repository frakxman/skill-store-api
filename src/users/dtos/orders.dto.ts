import { PartialType } from "@nestjs/mapped-types";
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Product } from "src/products/entities/product.entity";

export class CreateOrderDTO {

    @IsNumber()
    @IsNotEmpty()
    user: number;
    
    @IsArray()
    @IsNotEmpty()
    products: Product[];
}

export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {}