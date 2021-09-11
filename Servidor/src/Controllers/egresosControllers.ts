import{Request,Response} from 'express';
import pool from '../database';


class EgresosControllers{

    public async list (req:Request, res:Response){
       const registros= await pool.query('SELECT * FROM admin');
       res.json(registros);
    } 

    public async create (req:Request, res:Response):Promise<void>{

        await pool.query ('INSERT INTO admin set?',[req.body ]);
        res.json({message:'REGISTRO GURDADO'});
        
    }

    public async getsuma (req:Request, res:Response):Promise<void>{
        const {clase}=req.params;
        const suma= await pool.query (`SELECT sum(cantidad) FROM admin`,[clase ]);
        res.json(suma);
        
    }
}
 const egresosControllers= new EgresosControllers();
export default egresosControllers;