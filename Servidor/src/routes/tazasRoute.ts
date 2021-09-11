import {Router } from 'express';
import egresosControllers from '../Controllers/egresosControllers'

class TazasRoute{

    public router:Router=Router();

    constructor(){
        this.config();


    }

    config():void{

        this.router.get('/',egresosControllers.list);
        this.router.post('/',egresosControllers.create );
        this.router.get('/:clase',egresosControllers.getsuma );

    }

}
const tazasRoute= new TazasRoute();
export default tazasRoute.router;
