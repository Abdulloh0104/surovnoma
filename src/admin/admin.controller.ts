import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-staff.dto";
import { UpdateAdminDto } from "./dto/update-staff.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Admin } from "./models/staff.model";
import { UpdatePasswordDto } from "./dto/update-password.dto";
import { AdminService } from "./admin.service";

@Controller("admin")
export class AdminController {
  constructor(private readonly staffService: AdminService) {}

  @ApiOperation({ summary: "CREATE" })
  @ApiResponse({
    status: 200,
    description: "Activation",
    type: Admin,
  })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.staffService.create(createAdminDto);
  }

  @ApiOperation({ summary: "GET ALL" })
  @ApiResponse({
    status: 200,
    description: "List of Admines",
    type: [Admin],
  })
  @Get()
  findAll() {
    return this.staffService.findAll();
  }

  @ApiOperation({ summary: "GET One By Id" })
  @ApiResponse({
    status: 200,
    description: "Admin",
    type: Admin,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.staffService.findOne(+id);
  }

  @ApiOperation({ summary: "UPDATE" })
  @ApiResponse({
    status: 200,
    description: "Update Admin",
    type: Admin,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.staffService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: "UPDATE Password" })
  @ApiResponse({
    status: 200,
    description: "Update Admin Password",
    type: Admin,
  })
  @Post("password/:id")
  updatePassord(
    @Param("id") id: string,
    @Body() updatePasswordDto: UpdatePasswordDto
  ) {
    return this.staffService.updatePassword(+id, updatePasswordDto);
  }

  @ApiOperation({ summary: "DELETE" })
  @ApiResponse({
    status: 200,
    description: "Delete Admin",
    type: Admin,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.staffService.remove(+id);
  }
}
