import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsUrl()
    @IsNotEmpty()
    readonly image: string;

    @IsNumber()
    @IsNotEmpty()
    readonly stock: number;
}

export class updateProductDTO extends CreateProductDTO {}