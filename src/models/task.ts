import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database'; 
import User from './user';

class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string | null;
  public state!: 'to_do ' | 'in_progress' | 'completed';
  public user_id!: number;
}

// Inicializa el modelo con los atributos
Task.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  state: {
    type: DataTypes.ENUM('to_do', 'in_progress', 'completed'),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'task',
  timestamps: false,
});

Task.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

export default Task;