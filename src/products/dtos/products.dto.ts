import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock: number;
}

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}