import express, {Express, Request, Response} from 'express';
// @ts-ignore
import { MasterRouter } from "./routes/MasterRoute"
import * as mongoose from "mongoose";
import dotenv from 'dotenv';



class ExpressApplication {
    private __express_application__: Express;
    private __port__: number | string | undefined;

    constructor() {
        dotenv.config();
        this.__express_application__ = express();
        this.__port__ = process.env.PORT || 3000;
        this.boot_sqeuqnse()
    }
    private boot_sqeuqnse(){
        this.database_boot()
        this.load_routes()
        this.boot()
    }
    private database_boot(){
        // @ts-ignore
        mongoose.connect(process.env.MONGODB_URI ?? "oops", {
            dbName: 'registrations',
        }).then(() => {
            console.log('Suc to MongoDB');
        }).catch((error) => {
            console.error('Err to MongoDB');
        });

    }
    private load_routes() {
        this.__express_application__.use(MasterRouter)
    }

    private boot() {
        this.__express_application__.listen(this.__port__, () => {
            console.log(`Server is running!\nListening to: http://127.0.0.1:${this.__port__}`)
        })
    }
}


export default {
    "ExpressApplication" : ExpressApplication
};