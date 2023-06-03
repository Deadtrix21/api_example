const {ApiRouter} = require("./ApiRouter");
const Router = require("express").Router()
const {NotValidRouteError} = require("../exceptions/MasterExceptions")

Router.all("/", function (req, res) {
    let time = new Date()
    if (req.method === "GET"){
        return res.status(200).send(`${time}`)
    }
    else if (req.method === "POST"){
        return res.status(200).json({
            status : "Suc",
            results : time,
        })
    }
    else{
        return res.status(404).json({
            status : "Err",
            trace : new NotValidRouteError("Oops this is not a valid route.")
        })
    }

})

Router.use(ApiRouter)

module.exports = {
    "MasterRouter" : Router
}