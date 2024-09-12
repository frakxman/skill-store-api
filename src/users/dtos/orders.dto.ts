import { PartialType } from "@nestjs/mapped-types";
import { IsString } from "class-validator";

export class CreateOrderDTO {
    @IsString()
    readonly name: string;
}

export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {}