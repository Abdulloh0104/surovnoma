


import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-staff.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
