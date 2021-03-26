import { AllowNull, AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize/types";
import SiteTheme from "./SiteTheme";
import User from './User'


@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme'
})
class UserTheme extends Model<UserTheme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataTypes.INTEGER)
  id: number;

  @ForeignKey(() => SiteTheme)
  @AllowNull(false)
  @Column(DataTypes.STRING)
  user_theme: string;

  @Column(DataTypes.STRING)
  device: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
      type: DataTypes.INTEGER,
      field: 'owner_id'
  })
  ownerId: string;
}

export default UserTheme
