import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { AuthAdminController } from "./auth.controller";
import { AuthAdminService } from "./auth.service";

@Module({
  imports: [
    JwtModule.register({ global: true }),
    AdminModule,
  ],
  controllers: [
    AuthAdminController,
  ],
  providers: [AuthAdminService],
})
export class AuthModule {}
