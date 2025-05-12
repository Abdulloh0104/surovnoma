import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

interface IAdmincreationAttr {
  name: string;
  isCreator: boolean;
  email: string;
  password: string;
  phoneNumber: string;
}

@Table({ tableName: "staff", timestamps: true })
export class Admin extends Model<Admin, IAdmincreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ApiProperty({
    example: "Bahodir",
    description: "Familiya",
  })
  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @ApiProperty({
    example: "admin",
    description: "admin yoki suparadmin",
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue:false
  })
  declare isCreator: boolean;

  @ApiProperty({
    example: "test@gamil.com",
    description: "email",
  })
  @Column({
    type: DataType.STRING(50),
  })
  declare email: string;

  @ApiProperty({
    example: "121dsdw5",
    description: "parol",
  })
  @Column({
    type: DataType.STRING,
  })
  declare password: string;

  @ApiProperty({
    example: "901234567",
    description: "phoone Number",
  })
  @Column({
    type: DataType.STRING,
  })
  declare phoneNumber: string;

  @Column({
    type: DataType.STRING,
  })
  declare hashed_refresh_token: string;
 
}
