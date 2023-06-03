const {MasterRouter} = require("./routes/MasterRoutes");
const ExpressApp = require("express")()
const ExpressPort = process.env.PORT||3000


ExpressApp.use(MasterRouter)


ExpressApp.listen(ExpressPort,()=>{
    console.log(`Server is UP \nListening to: http://127.0.0.1:${ExpressPort}`)
})