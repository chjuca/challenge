import { Request, Response } from "express";
import Task from "../models/task";


export async function getAllTasks(req: Request, resp: Response) {
    try{
        const tasks = await getAllTasksDB();
        return resp.status(200).json({
                ok: true,
                data: tasks
            })
    } catch(e){
        console.log(e)
}
}   

async function getAllTasksDB(): Promise<Task[]>{
    const tasks = await Task.findAll();
    console.log(tasks)
    return tasks;
}