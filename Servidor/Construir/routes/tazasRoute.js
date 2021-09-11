"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const egresosControllers_1 = __importDefault(require("../Controllers/egresosControllers"));
class TazasRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', egresosControllers_1.default.list);
        this.router.post('/', egresosControllers_1.default.create);
        this.router.get('/:clase', egresosControllers_1.default.getsuma);
    }
}
const tazasRoute = new TazasRoute();
exports.default = tazasRoute.router;
