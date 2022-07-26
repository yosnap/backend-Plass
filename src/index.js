import { app } from './app';
import { connect } from 'mongoose';
import {} from 'dotenv/config';

const port = process.env.PORT;
const db = process.env.MONGO_URL;

(() => {
    app.listen(port,err => {
        if(err) return console.log(`Error al inicializar ${err}`);

        console.log(`Servidor corriendo por el puerto ${port}`);
        connect(db,err => {
            if(err) return console.log(`Error en BDD ${err}`);

            console.log('Acceso a la Base de datos');
        });
    })
})();