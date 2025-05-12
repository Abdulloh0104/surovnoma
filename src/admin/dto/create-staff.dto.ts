import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsEmail } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "Bahodir",
    description: "Familiya",
  })
  @IsString()
  name: string;

 
   @ApiProperty({
     example: "admin",
     description: "admin yoki suparadmin",
   })
   declare isCreator: boolean;

  @ApiProperty({
    example: "test@gamil.com",
    description: "email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "121dsdw5",
    description: "parol",
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: "staff paroli rewrite",
    description: "staff password rewrite",
  })
  @IsString()
  confirm_password: string;

  @ApiProperty({
    example: "901234567",
    description: "phoone Number",
  })
  @IsString()
  phoneNumber: string;

  refreshToken: string;
}
