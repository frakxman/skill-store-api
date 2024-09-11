import { IsNotEmpty, IsString } from "class-validator";
export class CreateCategoryDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly image: string;
}