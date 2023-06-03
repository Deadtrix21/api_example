
// class MasterExcetions{
//     NotValidRouteError(message = "") {
//         this.name = "NotValidRouteError";
//         this.message = message;
//         this.NotValidRouteError.prototype = new Error();
//     }
//
//     class NotImplemented extends Error {
//     constructor(message = "", ...args) {
//         super(message, ...args);
//         this.message = message + " has not yet been implemented.";
//     }
// }
// }
class NotValidRouteError extends Error {
    constructor(message) {
        super();
        this.Exception = "NotValidRouteError";
        this.Message = message;
    }

    toString() {
        return this.message;
    }
}

module.exports = {
    NotValidRouteError
}
