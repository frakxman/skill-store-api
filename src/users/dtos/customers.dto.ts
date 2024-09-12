import { PartialType } from "@nestjs/mapped-types";
import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { Order } from "../entities/order.entity";

export class CreateCustomerDTO {

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
    
    @IsArray()
    @IsNotEmpty()
    orders: Order[];
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}