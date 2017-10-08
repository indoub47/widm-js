class Flaw {
    constructor(message, methodId) {
        if (!message || !methodId) {
            throw "Flaw constructor: message and methodId are required"
        }
        
        this._message = message
        this._methodId = methodId
    }
    
    get message() {
        return this._message
    }
    
    get methodId() {
        return this._methodId
    }
}