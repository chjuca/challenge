import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database'; 
import User from './user';

enum StateEnum {
  TODO = 'to_do',
  PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}
export interface TaskInterface {
  id?: number
  title: string
  description: string | null;
  state?: 'to_do' | 'in_progress' | 'completed';
  user_id: number;
}


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
    type: DataTypes.ENUM(...Object.values(StateEnum)),
    allowNull: false,
    validate: {
      isIn: {
        args: [Object.values(StateEnum)],
        msg: 'Estado no válido.',
      },
    },
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