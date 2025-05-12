import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { SignInDto } from "./dto/sign-in.dto";
import { Response } from "express";
import { AuthAdminService } from "./auth.service";
import { CookieGetter } from "../common/decorators/cookie-getter.decorator";

@Controller("auth/admin")
export class AuthAdminController {
  constructor(private readonly authService: AuthAdminService) {}

  @Post("sign-in")
  async signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signIn(signInDto, res);
  }

  @HttpCode(200)
  @Post("sign-out")
  signout(
    @CookieGetter("admin_refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.signOut(refreshToken, res);
  }

  @HttpCode(200)
  @Post(":id/refresh")
  refresh(
    @Param("id", ParseIntPipe) id: number,
    @CookieGetter("admin_refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshToken(id, refreshToken, res);
  }
}
