"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(req, res) {
        // pool.query( 'DESCRIBE admin');
        res.json({ text: 'ingresar' });
    }
    create(req, res) {
        res.json({ text: 'creando un registro' });
    }
    borrar(req, res) {
        res.json({ text: 'borrando un registro' });
    }
}
exports.indexControllers = new IndexControllers();
