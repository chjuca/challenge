import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';

export interface UserInterface {
  id?: number;
  email: string;
  password: string;

}
class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;

}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'users',
  timestamps: false,
});

export default User;