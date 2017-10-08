class SingleInspValidator {
    
    constructor(validatorArray) {
        if (validatorArray.length === 0) {
            throw "SingleInspValidator constructor: at least one validation method is required"
        }
        
        this._validators = validatorArray
    }
    
    validate(insp) {
        var validatedInsp = new ValidatedInsp(insp)    
        this._validators.forEach(function(validationMethod) {

            // proper context must be bound in order validation methods 
            // could see other methods of the same object
            var boundMethod = validationMethod.bind(ValidationFuncs)
            
            const flaw = boundMethod(insp)
            if (flaw) {
                validatedInsp.setFlaw(flaw)
            }
        })
        return validatedInsp
    }
}