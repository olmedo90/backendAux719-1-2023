import express,{Response, Request, Application} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { routes } from './routes';


//inicializacion
dotenv.config();
const app:Application = express();
//settigns

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/routes",routes)

//conect data base

//starting the server
app.listen(process.env.PORT,()=>{
    console.log("server in port:", process.env.PORT)
})
