import { Router, request, response, Request, Response } from 'express';
import { getTasks, saveTask, getTask, updateTask, deleteTask, finishedTask } from './controller/TasksController';

const routes = Router();

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World' });
});

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);
routes.delete('/tasks/:id', deleteTask);
routes.patch('/tasks/:id', finishedTask);

export default routes;
