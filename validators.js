var ValidationFuncs = {
    
    arrDoesntHave: function(arr, thing) {
        return arr.every(a => a != thing)
    },
    
    arrDoesHave: function(arr, thing) {
        return arr.some(a => a = thing)
    },
    
    isNotPositiveNum: function(thing) {
        return !isNaN(thing) && thing <= 0
    },
    
    isNeitherPositiveNorZero: function(thing) {
        return !isNaN(thing) && thing < 0
    },

    isDefined: function(thing) {
        return thing !== undefined
    },  

    isUndefined: function(thing) {
        return thing === undefined
    },

    /////////////////////////////////////////////
    
    isIdInvalid: function(insp) {
        // console.log("this from isIdInvalid", this)
        return this.isDefined(insp.id) && this.isNotPositiveNum(insp.id)
    },
    
    isLinijaInvalid: function(insp) {
        return this.arrDoesntHave(stuff.linijos, insp.linija)
    },
    
    isKeliasInvalid: function(insp) {
        return this.isUndefined(insp.kelias) || this.isNotPositiveNum(insp.kelias)
    },
    
    isKmInvalid: function(insp) {
        return this.isUndefined(insp.km) || this.isNotPositiveNum(insp.km)
    },
    
    isPkInvalid: function(insp) {
        return this.isDefined(insp.pk) && this.isNeitherPositiveNorZero(insp.pk)
    },
    
    isMInvalid: function(insp) {
        return this.isUndefined(insp.m) || this.isNeitherPositiveNorZero(insp.m)
    },
    
    isSiuleInvalid: function(insp) {
        return this.isDefined(insp.siule) && this.isNeitherPositiveNorZero(insp.siule)
    },
    
    isSkodasInvalid: function(insp) {
        return this.arrDoesntHave(stuff.skodai, insp.skodas)
    },
    
    isSuvirinoInvalid: function(insp) {
        return this.isDefined(insp.suvirino) && this.arrDoesntHave(stuff.suvirino, insp.suvirino)
    },
    
    isOperatoriusInvalid: function(insp) {
        return this.arrDoesntHave(stuff.operatoriai, insp.operatorius)
    },
    
    isAparatasInvalid: function(insp) {
        return this.arrDoesntHave(stuff.aparatai, insp.aparatas)
    },
    
    isKelintasInvalid: function(insp) {
        return this.isDefined(insp.kelintas) && this.arrDoesntHave(stuff.kelinti, insp.kelintas)
    },
    
    isTdataInvalid: function(insp) {
        const regex = /^\d{4}[\-]\d{2}[\-]\d{2}$/g
        if ((typeof insp.tdata === "string" && !regex.test(insp.tdata))
            || typeof insp.tdata === "number") {
        // "yyyy-mm-dd" only
            return true
        }  
        
        const tikraData = new Date(insp.tdata)
        
        if ( 
            Object.prototype.toString.call(tikraData) !== "[object Date]" ||
            isNaN(tikraData.getTime()) 
           ) {
            return true
        }
        
        return false
    },
    
    /////////////////////////////////////////////////////////
    //// real validators
    ////////////////////////////////////////////////////////
    
    validateId: function(insp) {
        // console.log("this from validateId", this);
        if (this.isIdInvalid(insp)) {
            return new Flaw("iraso ID", "id")
        }
    },
    
    validateLinija: function(insp) {
        if (this.isLinijaInvalid(insp)) {
            return new Flaw("linija", "linija")
        }
    },
    
    validateKelias: function(insp) {
        if (this.isKeliasInvalid(insp)) {
            return new Flaw("kelias", "kelias")
        }
    },
    
    validateKm: function(insp) {
        if (this.isKmInvalid(insp)) {
            return new Flaw("km", "km")
        }
    },   
    
    validatePk: function(insp) {
        
        const flaw = new Flaw("pk", "pk")
        
        if (this.isPkInvalid(insp)) {
            return flaw
        }
        
        // toliau pk is valid
        
        if (this.isKeliasInvalid(insp)) {
            return undefined
        }
        
        // toliau pk is valid ir kelias is valid
                
        if (insp.kelias != 8 && (insp.pk == 0 || insp.pk == undefined)) {
            return flaw
        }
        
        if (insp.kelias == 8 && insp.pk != 0 && insp.pk != undefined) {
            return flaw
        }
    },    
    
    validateM: function(insp) {
        if (this.isMInvalid(insp)) {
            return new Flaw("m", "m")
        }
    },    
    
    validateSiule: function(insp) {        
        const flaw = new Flaw("siūlė", "siule")
        
        if (this.isSiuleInvalid(insp)) {
            return flaw
        }
        
        // toliau siūlė is valid
        
        if (this.isKeliasInvalid(insp)) {
            return undefined
        }
        
        // toliau kelias ir siūlė are valid
                
        if (insp.kelias != 8 && insp.kelias != 9 && insp.siule == undefined) {
            return flaw
        }
        
        if ((insp.kelias == 8 || insp.kelias == 9) && insp.siule != undefined) {
            return flaw
        }
    }, 
    
    validateSkodas: function(insp) {
        if (this.isSkodasInvalid(insp)) {
            return new Flaw("salyginis kodas", "skodas")
        }
    },
    
    validateSuvirino: function(insp) {
        if (this.isSuvirinoInvalid(insp)) {
            return new Flaw("suvirino", "suvirino")
        }
    }, 
    
    validateOperatorius: function(insp) {
        if (this.isOperatoriusInvalid(insp)) {
            return new Flaw("operatorius", "operatorius")
        }
    },    
    
    validateAparatas: function(insp) {
        if (this.isAparatasInvalid(insp)) {
            return new Flaw("aparatas", "aparatas")
        }
    },
    
    validateTdata: function(insp) {
        if (this.isTdataInvalid(insp)) {
            return new Flaw("tikrinimo data", "tdata")
        }
    },
    
    validateKelintas: function(insp) {
        if (this.isKelintasInvalid(insp)){
            return new Flaw("kelintas tikrinimas", "kelintas")
        }
    },
    
    validateKelintasId: function(insp) {
        if (this.isKelintasInvalid(insp) || this.isIdInvalid(insp)) {
            return undefined
        }
        
        if (insp.id != undefined && insp.kelintas == 1) {
            return new Flaw("pirmajam tikrinimui neturi būti id", "kelintasId")
        }
        
        if (insp.id == undefined && insp.kelintas != 1) {
            return new Flaw("nepirmajam tikrinimui turi būti id", "kelintasId")
        }
    },
    
    validatePirmojoSuvirino: function(insp) {
        if (this.isKelintasInvalid(insp) || this.isSuvirinoInvalid(insp)) {
            return undefined
        }
        
        if (insp.kelintas == 1 && insp.suvirino == undefined) {
                return new Flaw("pirmajam tikrinimui nenurodyta, kas virinio", "pirmojoSuvirino")
            }
        }
}

const Validators = [
    ValidationFuncs.validateId,
    ValidationFuncs.validateLinija,
    ValidationFuncs.validateKelias,
    ValidationFuncs.validateKm,
    ValidationFuncs.validatePk,
    ValidationFuncs.validateM,
    ValidationFuncs.validateSiule,
    ValidationFuncs.validateSkodas,
    ValidationFuncs.validateSuvirino,
    ValidationFuncs.validateAparatas,
    ValidationFuncs.validateOperatorius,
    ValidationFuncs.validateTdata, 
    ValidationFuncs.validateKelintas,
    ValidationFuncs.validateKelintasId,
    ValidationFuncs.validatePirmojoSuvirino
]