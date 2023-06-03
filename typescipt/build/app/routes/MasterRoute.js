"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const masterRouter = (0, express_1.Router)();
masterRouter.all("/", function (request, response) {
    let time = new Date();
    if (request.method === "GET") {
        return response.status(200).send(`${time}`);
    }
    else if (request.method === "POST") {
        return response.status(200).json({
            status: "Suc",
            results: time,
        });
    }
    else {
        return response.status(404).json({
            status: "Err",
            trace: new Error("Oops this is not a valid route.")
        });
    }
});
module.exports = {
    "MasterRouter": masterRouter
};
