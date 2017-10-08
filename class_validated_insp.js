class ValidatedInsp {
    constructor(insp) {
        if (!insp) {
            throw "ValidatedInsp constructor: insp is required"
        }
        this._insp = insp
        this._flaws = []
    }
    
    setFlaw(flaw) {
        this._flaws.push(flaw)
    }
    
    get insp() {
        return this._insp
    }
    
    get flaws() {
        return this._flaws
    }
    
    get isValid() {
        return this._flaws.length === 0
    }
    
    get length() {
        return this._flaws.length
    }
}
