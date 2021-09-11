import{Request,Response} from 'express';


class IndexControllers{

    public index (req:Request, res:Response){

       // pool.query( 'DESCRIBE admin');
        res.json({text:'ingresar'});

    } 

    public create (req:Request, res:Response){
        res.json({text:'creando un registro'});

    }

    public borrar (req:Request, res:Response){
        res.json({text:'borrando un registro'});

    }
}
export const indexControllers= new IndexControllers();
