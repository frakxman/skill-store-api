import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";
import { Order } from "../entities/order.entity";

export class CreateCustomerDTO {

    @IsString()
    name: string;
    
    @IsString()
    email: string;
    
    @IsString()
    password: string;
    
    @IsString()
    orders: Order[];
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}