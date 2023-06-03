require("dotenv").config()


require("./app/database")


setTimeout(() => {
    require("./app/server")
}, 3000)
