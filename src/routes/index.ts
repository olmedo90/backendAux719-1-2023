import {Router, Request, Response} from 'express'

export const routes = Router();
routes.get('/', (req:Request, res:Response)=>{
    res.json({sms:'hola mundo desde Seminario'});
})

routes.post('/', (req:Request, res:Response)=>{
    const body = req.body;
    console.log(body)
    res.json(req.body);
})