import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

export interface UserInterface {
  id?: number;
  email: string;
  password: string;

}

export const User = sequelize.define('users', {
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
  timestamps: false,
});

export default User;