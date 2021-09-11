"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../Controllers/indexControllers");
class IndexRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexControllers.index);
        //this.router.post('/',indexControllers.create);
        // this.router.delete ('/:id',indexControllers.borrar);
    }
}
const indexRoute = new IndexRoute();
exports.default = indexRoute.router;
