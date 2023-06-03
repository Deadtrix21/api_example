import {Router, Request, Response} from "express"

const masterRouter : Router = Router()

masterRouter.all("/", function (request:Request, response:Response) {
    let time = new Date()
    if (request.method === "GET"){
        return response.status(200).send(`${time}`)
    }
    else if (request.method === "POST"){
        return response.status(200).json({
            status : "Suc",
            results : time,
        })
    }
    else{
        return response.status(404).json({
            status : "Err",
            trace : new Error("Oops this is not a valid route.")
        })
    }

})


module.exports = {
    "MasterRouter" : masterRouter
}