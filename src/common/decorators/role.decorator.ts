import { SetMetadata } from "@nestjs/common";
import { ROLES_KEY } from "../../app.constance";

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
