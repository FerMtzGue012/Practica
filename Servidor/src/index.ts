import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoute from  './routes/indexRoute';
import tazasRoute from './routes/tazasRoute';


class Servidor{

    public app:Application;

    constructor(){

        this.app= express();
        this.config();
        this.route();
    }

    config():void{
        this.app.set('port',process.env.PORT ||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    route():void{
        this.app.use(indexRoute);
        this.app.use('/almacen',tazasRoute);
    }

    start():void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el Puerto',this.app.get(`port`));
        });
    }
}

const servidor = new Servidor();
servidor.start();