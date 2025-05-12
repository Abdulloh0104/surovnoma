import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-staff.dto";
import { UpdateAdminDto } from "./dto/update-staff.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./models/staff.model";
import * as bcrypt from "bcrypt";
import { UpdatePasswordDto } from "./dto/update-password.dto";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly staffModel: typeof Admin) {}
  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;
    if (password !== confirm_password) {
      throw new BadRequestException("Parollar mos emas");
    }
    const hashed_password = await bcrypt.hash(password, 7);
    const newUser = await this.staffModel.create({
      ...createAdminDto,
      password: hashed_password,
    });
    return { message: `New Admin added`, newUser };
  }

  findAll() {
    return this.staffModel.findAll({ include: { all: true } });
  }

  findAdminByEmail(email: string) {
    return this.staffModel.findOne({ where: { email } });
  }

  findOne(id: number) {
    return this.staffModel.findByPk(id);
  }

  async updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
      const user = await this.staffModel.findByPk(id);
      if (!user || !user.password) {
        throw new NotFoundException("user not found");
      }
  
      const { password, newPassword, confirm_password } = updatePasswordDto;
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new BadRequestException("Forbidden");
      }
  
      if (newPassword !== confirm_password) {
        throw new BadRequestException("Parollar mos emas");
      }
      const hashed_password = await bcrypt.hash(newPassword, 7);
     await this.staffModel.update(
       {
         ...user,
         password: hashed_password,
       },
       { where: { id }, returning: true }
     );
      user.save()
      return { message: "Doctor password was changed"};
    }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.staffModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    const deleted = await this.staffModel.destroy({ where: { id } });
    if (deleted > 0) {
      return { message: `${id}-staff was deleted successfully` };
    }
    return { message: `Admin not found` };
  }

  async updateRefreshToken(id: number, hashed_refresh_token: string) {
    const updatedUser = await this.staffModel.update(
      { hashed_refresh_token },
      {
        where: { id },
      }
    );
    return updatedUser;
  }
}
