"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MasterRoute_1 = require("./routes/MasterRoute");
const mongoose = __importStar(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
class ExpressApplication {
    constructor() {
        dotenv_1.default.config();
        this.__express_application__ = (0, express_1.default)();
        this.__port__ = process.env.PORT || 3000;
        this.boot_sqeuqnse();
    }
    boot_sqeuqnse() {
        this.database_boot();
        this.load_routes();
        this.boot();
    }
    database_boot() {
        // @ts-ignore
        mongoose.connect(process.env.MONGODB_URI ?? "oops", {
            dbName: 'registrations',
        }).then(() => {
            console.log('Suc to MongoDB');
        }).catch((error) => {
            console.error('Err to MongoDB');
        });
    }
    load_routes() {
        this.__express_application__.use(MasterRoute_1.MasterRouter);
    }
    boot() {
        this.__express_application__.listen(this.__port__, () => {
            console.log(`Server is running!\nListening to: http://127.0.0.1:${this.__port__}`);
        });
    }
}
exports.default = {
    "ExpressApplication": ExpressApplication
};
