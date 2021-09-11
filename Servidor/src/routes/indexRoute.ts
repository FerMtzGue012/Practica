import {Router} from 'express';
import {indexControllers}  from '../Controllers/indexControllers';

class IndexRoute{

    public router:Router=Router();

    constructor(){

        this.config();

        }

    config():void{

        this.router.get ('/', indexControllers.index);
        //this.router.post('/',indexControllers.create);
       // this.router.delete ('/:id',indexControllers.borrar);


    }

}
const indexRoute= new IndexRoute();
export default indexRoute.router;
