import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNumber } from "class-validator";

export class UpdatePasswordDto {
  @ApiProperty({
    example: "doctor paroli",
    description: "doctor password",
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: "doctor new password",
    description: "doctor password rewrite",
  })
  @IsString()
  newPassword: string;

  @ApiProperty({
    example: "doctor parol rewrite",
    description: "doctor password rewrite",
  })
  @IsString()
  confirm_password: string;
}
