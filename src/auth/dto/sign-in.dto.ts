import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
  @ApiProperty({
    example: "test@gmail.com",
    description: "e-mail -> electron pochta",
  })
  readonly email: string;
  @ApiProperty({
    example: "@Pp1e",
    description: "parol",
  })
  readonly password: string;
}