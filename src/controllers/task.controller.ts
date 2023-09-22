import { Request, Response } from "express";
import Task, { TaskInterface } from "../models/task";


export async function getAllTasks(req: Request, res: Response) {
    try{
        const tasks = await getAllTasksDB();
        return res.status(200).json({
                ok: true,
                data: tasks
            })
    } catch(e){
        console.log(e)
        return res.status(500).json({
            ok: false,
            data: []
        })
    }
}   

export async function getAllTasksByState(req: Request, res: Response) {
    const {state} = req.body
    try{
        const tasks = await getAllTaskByStateDB(state);
        return res.status(200).json({
                ok: true,
                data: tasks
            })
    } catch(e){
        console.log(e)
        return res.status(500).json({
            ok: false,
            data: []
        })
    }
}  

export async function createTask(req: Request, res: Response) {
    const {title, description} = req.body
    const {user_id} = req.params

    const task: TaskInterface = {title, description, state: 'to_do', user_id: Number(user_id) }

    try{
        const newTask = await createTaskDB(task);
        return res.status(200).json({
                ok: true,
                data: newTask
            })
    } catch(e){
        console.log(e)
        return res.status(500).json({
            ok: false,
            data: []
        })
    }
}  

export async function updateTaskState(req: Request, res: Response) {
    const {state} = req.body
    const {id} = req.params

    try{
        const updateTask = await updateTaskStateDB(state, id);
        return res.status(200).json({
                ok: true,
                data: updateTask
            })
    } catch(e){
        console.log(e)
        return res.status(500).json({
            ok: false,
            data: []
        })
    }
}  

async function getAllTasksDB(): Promise<Task[]>{
    const tasks = await Task.findAll();
    return tasks;
}

async function getAllTaskByStateDB(state: string): Promise<Task[]>{
    const tasks = await Task.findAll({
        where: {
            state
        }
    });
    return tasks;
}

async function createTaskDB(task: TaskInterface): Promise<Task>{
    const {title, description, state, user_id} = task
    const newTask = await Task.create({
        title,
        description,
        state,
        user_id,
      });
  
    return newTask;
}

async function updateTaskStateDB(state: string, id: string): Promise<[affectedCount: number]>{
    
    const updateTask = await Task.update({
        state,
      }, {
        where: {
            id
        }
      });
  
    return updateTask;
}