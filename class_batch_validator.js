class BatchValidator {
    constructor(singleInspValidator) {
        if (!singleInspValidator) {
            throw "BatchValidator constructor: SingleInspValidator is required"
        }
        this.singleInspValidator = singleInspValidator
    }
    
    validate(arrayOfInsps) {        
        var validatedInsps = arrayOfInsps.map(insp => this.singleInspValidator.validate(insp));
        return this.validateForVkRepeats(validatedInsps);
    }

    validateForVkRepeats(validatedInsps) {
        var arrayOfVInsps = validatedInsps;
        for (var i in arrayOfVInsps) {
            if (this.sameVkCount(arrayOfVInsps[i], arrayOfVInsps) > 1) {
                arrayOfVInsps[i].flaws.push(new Flaw("vietos kodas kartojasi", "validateForVkRepeats"));
            }
        }
        return arrayOfVInsps;
    }

    sameVkCount(vinsp, arrayOfVInsps) {
        var count = 0;
        for(var i in arrayOfVInsps) {
            if (this.sameVk(vinsp.insp, arrayOfVInsps[i].insp)) {
                count++;
            }
        }
        return count;
    }

    sameVk(insp1, insp2) {
        return insp1.linija == insp2.linija &&
        insp1.kelias == insp2.kelias &&
        insp1.km == insp2.km &&
        insp1.pk == insp2.pk &&
        insp1.m == insp2.m &&
        insp1.siule == insp2.siule;
    }
}