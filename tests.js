QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Inspection.id validation test", function(assert) {
    const insp123 =         new Insp(   123,       "01", 256, 45, "06.4", "2017-09-13", 1)
    const insp0 =           new Insp(   0,         "01", 256, 45, "06.3", "2017-09-13", 1)
    const inspMinus100 =    new Insp(   -100,      "01", 256, 45, "06.4", "2017-09-13", 1)
    const inspA =           new Insp(   "a",       "01", 256, 45, "06.4", "2017-09-13", 1)
    const inspTrue =        new Insp(   "true",    "01", 256, 45, "06.4", "2017-09-13", 1)
    const inspFalse =       new Insp(   "false",   "01", 256, 45, "06.4", "2017-09-13", 1)
    const insp =            new Insp(   "",        "01", 256, 45, "06.4", "2017-09-13", 1)
    const inspUndefined =   new Insp(   undefined, "01", 256, 45, "06.4", "2017-09-13", 1)
    const validator = Validators.validateId
    assert.equal(validator(insp123), undefined)
    assert.equal(validator(insp0), undefined)
    assert.notEqual(validator(inspMinus100), undefined)
    assert.notEqual(validator(inspA), undefined)
    assert.notEqual(validator(inspTrue), undefined)
    assert.notEqual(validator(inspFalse), undefined)
    assert.notEqual(validator(insp), undefined)
    assert.notEqual(validator(inspUndefined), undefined)
});

QUnit.test("Inspection.linija validation test", function(assert) {
    const insp01String =        new Insp(123,   "01",         256, 45, "06.4", "2017-09-13", 1)
    const insp55String =        new Insp(123,   "55",         256, 45, "06.3", "2017-09-13", 1)
    const insp0String =         new Insp(123,   "0",          256, 45, "06.3", "2017-09-13", 1)
    const inspMinus5String =    new Insp(123,   "-5",         256, 45, "06.3", "2017-09-13", 1)
    const insp100 =             new Insp(123,   "100",          256, 45, "06.4", "2017-09-13", 1)
    const inspMinus100 =        new Insp(123,   "-100",         256, 45, "06.4", "2017-09-13", 1)
    const insp0 =               new Insp(123,   "0",            256, 45, "06.4", "2017-09-13", 1)
    const inspTrue =            new Insp(123,   "true",       256, 45, "06.4", "2017-09-13", 1)
    const inspFalse =           new Insp(123,   "false",      256, 45, "06.4", "2017-09-13", 1)
    const inspEmptyString =     new Insp(123,   "",           256, 45, "06.4", "2017-09-13", 1)
    const inspUndefined =       new Insp(123,   "undefined",    256, 45, "06.4", "2017-09-13", 1)
    const validator = Validators.validateLinija
    assert.equal(validator(insp01String), undefined)
    assert.equal(validator(insp55String), undefined)
    assert.equal(validator(insp0String), undefined)
    assert.notEqual(validator(inspMinus5String), undefined)
    assert.equal(validator(insp100), undefined)
    assert.notEqual(validator(inspMinus100), undefined)
    assert.equal(validator(insp0), undefined)
    assert.notEqual(validator(inspTrue), undefined)
    assert.notEqual(validator(inspFalse), undefined)
    assert.notEqual(validator(inspEmptyString), undefined)
    assert.notEqual(validator(inspUndefined), undefined)
});

QUnit.test("Inspection.km validation test", function(assert) {
    const insp256 =                 new Insp(123, "01",     256,        45, "06.4", "2017-09-13", 1)
    const insp0 =                   new Insp(123, "01",     0,          45, "06.3", "2017-09-13", 1)
    const inspMinus100 =            new Insp(123, "01",     -100,       45, "06.4", "2017-09-13", 1)
    const inspAb =                  new Insp(123, "01",     "ab",       45, "06.4", "2017-09-13", 1)
    const insp123String =           new Insp(123, "01",     "256",      45, "06.4", "2017-09-13", 1)
    const insp0String =             new Insp(123, "01",     "0",        45, "06.4", "2017-09-13", 1)
    const inspMinus256String =      new Insp(123, "01",     "-256",     45, "06.4", "2017-09-13", 1)
    const inspUndefined =           new Insp(123, "01",     undefined,  45, "06.4", "2017-09-13", 1)
    const inspEmptyString =         new Insp(123, "01",     "",         45, "06.4", "2017-09-13", 1)
    const inspWhiteSpace =          new Insp(123, "01",     "   ",      45, "06.4", "2017-09-13", 1)
    const inspWhiteSpace256String = new Insp(123, "01",     " 256",     45, "06.4", "2017-09-13", 1)
    const validator = Validators.validateKm
    assert.equal(validator(insp256), undefined)
    assert.notEqual(validator(insp0), undefined)
    assert.notEqual(validator(inspMinus100), undefined)
    assert.notEqual(validator(inspAb), undefined)
    assert.equal(validator(insp123String), undefined)
    assert.notEqual(validator(insp0String), undefined)
    assert.notEqual(validator(inspMinus256String), undefined)
    assert.notEqual(validator(inspUndefined), undefined)
    assert.notEqual(validator(inspEmptyString), undefined)
    assert.notEqual(validator(inspWhiteSpace), undefined)
    assert.equal(validator(inspWhiteSpace256String), undefined)
    
});

QUnit.test("Inspection.m validation test", function(assert) {
    const insp256 =                 new Insp(123, "01", 256,    45,         "06.4", "2017-09-13", 1)
    const insp0 =                   new Insp(123, "01", 256,    0,          "06.3", "2017-09-13", 1)
    const inspMinus100 =            new Insp(123, "01", 256,    -45,        "06.4", "2017-09-13", 1)
    const inspAb =                  new Insp(123, "01", 256,    "ab",       "06.4", "2017-09-13", 1)
    const insp123String =           new Insp(123, "01", 256,    "45",       "06.4", "2017-09-13", 1)
    const insp0String =             new Insp(123, "01", 256,    "0",        "06.4", "2017-09-13", 1)
    const inspMinus256String =      new Insp(123, "01", 256,    "-45",      "06.4", "2017-09-13", 1)
    const inspUndefined =           new Insp(123, "01", 256,    undefined,  "06.4", "2017-09-13", 1)
    const inspEmptyString =         new Insp(123, "01", 256,    "",         "06.4", "2017-09-13", 1)
    const inspWhiteSpace =          new Insp(123, "01", 256,    "  ",       "06.4", "2017-09-13", 1)
    const inspWhiteSpace256String = new Insp(123, "01", 256,    "  45 ",    "06.4", "2017-09-13", 1)
    const validator = Validators.validateM
    assert.equal(validator(insp256), undefined)
    assert.equal(validator(insp0), undefined)
    assert.notEqual(validator(inspMinus100), undefined)
    assert.notEqual(validator(inspAb), undefined)
    assert.equal(validator(insp123String), undefined)
    assert.equal(validator(insp0String), undefined)
    assert.notEqual(validator(inspMinus256String), undefined)
    assert.equal(validator(inspUndefined), undefined)
    assert.equal(validator(inspEmptyString), undefined)
    assert.equal(validator(inspWhiteSpace), undefined)
    assert.equal(validator(inspWhiteSpace256String), undefined)   
});


QUnit.test("Inspection.skodas validation test", function(assert) {
    const insp064 =         new Insp(123, "01", 256, 45,    "06.4",     "2017-09-13", 1)
    const insp063 =         new Insp(123, "01", 256, 45,    "06.3",     "2017-09-13", 1)
    const insp062 =         new Insp(123, "01", 256, 45,    "06.2",     "2017-09-13", 1)
    const inspAb =          new Insp(123, "01", 256, 45,    "ab",       "2017-09-13", 1)
    const insp064Ws =       new Insp(123, "01", 256, 45,    "06.4 ",    "2017-09-13", 1)
    const inspWs063 =       new Insp(123, "01", 256, 45,    " 06.3",    "2017-09-13", 1)
    const inspUndefined =   new Insp(123, "01", 256, 45,    undefined,  "2017-09-13", 1)
    const inspEmptyString = new Insp(123, "01", 256, 45,    "",         "2017-09-13", 1)
    const inspWs =          new Insp(123, "01", 256, 45,    "    ",     "2017-09-13", 1)
    const validator = Validators.validateSkodas
    assert.equal(validator(insp064), undefined)
    assert.equal(validator(insp063), undefined)
    assert.notEqual(validator(insp062), undefined)
    assert.notEqual(validator(inspAb), undefined)
    assert.equal(validator(insp064Ws), undefined)
    assert.equal(validator(inspWs063), undefined)
    assert.notEqual(validator(inspUndefined), undefined)
    assert.notEqual(validator(inspEmptyString), undefined)
    assert.notEqual(validator(inspWs), undefined)
});


QUnit.test("Inspection.kelintas validation test", function(assert) {
    const insp1 =           new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  1           )
    const insp3 =           new Insp(123, "01", 256, 45, "06.3", "2017-09-13",  2           )
    const insp0 =           new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  0           )
    const inspMinus2 =      new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  -2          )
    const insp2str =        new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  "2"         )
    const insp0str =        new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  "0"         )
    const inspMinus2str =   new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  "-2"        )
    const inspWs2str =      new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  " 2"        )
    const insp2strWs =      new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  "2 "        )
    const inspUndefined =   new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  undefined   )
    const inspEmptyString = new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  ""          )
    const inspWs =          new Insp(123, "01", 256, 45, "06.4", "2017-09-13",  "  "        )
    const validator = Validators.validateKelintas   
    assert.equal(validator(insp1), undefined)
    assert.equal(validator(insp3), undefined)
    assert.notEqual(validator(insp0), undefined)
    assert.notEqual(validator(inspMinus2), undefined)
    assert.equal(validator(insp2str), undefined)
    assert.notEqual(validator(insp0str), undefined)
    assert.notEqual(validator(inspMinus2str), undefined)
    assert.equal(validator(inspWs2str), undefined)
    assert.equal(validator(insp2strWs), undefined)
    assert.notEqual(validator(inspUndefined), undefined)
    assert.notEqual(validator(inspEmptyString), undefined)
    assert.notEqual(validator(inspWs), undefined)
});

QUnit.test("Inspection.tdata validation test", function(assert) {
    const inspDate =            new Insp(123, "01", 256, 45, "06.4",    "2017-09-13",   2) //  1+
    const inspPeriods =         new Insp(123, "01", 256, 45, "06.4",    "2017.09.13",   2) //  2-
    const inspM =               new Insp(123, "01", 256, 45, "06.4",    "2017-9-13",    2) //  3-
    const inspD =               new Insp(123, "01", 256, 45, "06.4",    "2017-09-3",    2) //  4-
    const inspSlashes =         new Insp(123, "01", 256, 45, "06.4",    "2017/09/13",   2) //  5-
    const inspDSpaces =         new Insp(123, "01", 256, 45, "06.4",    "2017 09 3",    2) //  6-
    const inspSpaces =          new Insp(123, "01", 256, 45, "06.4",    "2017 09 13",   2) //  7-
    const inspYearYY =          new Insp(123, "01", 256, 45, "06.4",    "17-09-13",     2) //  8-
    const inspMonth13 =         new Insp(123, "01", 256, 45, "06.4",    "2017-13-13",   2) //  9-
    const inspDay32 =           new Insp(123, "01", 256, 45, "06.4",    "2017-09-32",   2) //  10-
    const inspInteger =         new Insp(123, "01", 256, 45, "06.4",    652369,         2) //  11-
    const inspMMYYYYDD =        new Insp(123, "01", 256, 45, "06.4",    "09-2017-13",   2) // 12-
    const inspDDMMYYYY =        new Insp(123, "01", 256, 45, "06.4",    "09-13-2017",   2) // 13-
    const inspUndefined =       new Insp(123, "01", 256, 45, "06.4",    undefined,      2) // 14-
    const inspEmptyString =     new Insp(123, "01", 256, 45, "06.4",    "",             2) // 15-
    const inspWs =              new Insp(123, "01", 256, 45, "06.4",    " ",            2) // 16-
    const inspSomTekst =        new Insp(123, "01", 256, 45, "06.4",    "abb",          2) // 17-
    const inspDateWithws =      new Insp(123, "01", 256, 45, "06.4",    " 2017-09-13 ", 2) // 18+
    const validator = Validators.validateTdata
    assert.equal(validator(inspDate), undefined) //1+
    assert.notEqual(validator(inspPeriods), undefined) //2+
    assert.notEqual(validator(inspM), undefined) //3+
    assert.notEqual(validator(inspD), undefined) //4+
    assert.notEqual(validator(inspSlashes), undefined) //5+
    assert.notEqual(validator(inspDSpaces), undefined) //6+
    assert.notEqual(validator(inspSpaces), undefined) //7+    
    assert.notEqual(validator(inspYearYY), undefined) //8-
    assert.notEqual(validator(inspMonth13), undefined) //9-
    assert.notEqual(validator(inspDay32), undefined) //10-
    assert.notEqual(validator(inspInteger), undefined) //11-
    assert.notEqual(validator(inspMMYYYYDD), undefined) //12-
    assert.notEqual(validator(inspDDMMYYYY), undefined) //13-
    assert.notEqual(validator(inspUndefined), undefined) //14-
    assert.notEqual(validator(inspEmptyString), undefined) //15-
    assert.notEqual(validator(inspWs), undefined) //16-
    assert.notEqual(validator(inspSomTekst), undefined) //17-
    assert.equal(validator(inspDateWithws), undefined) // 18+
});

QUnit.test("Insp constructor returns Insp", function(assert) {
    const inspWithoutId = new Insp(undefined, "01", 256, 42, "06.4", "2017-06-05", 1)
    const inspWithId = new Insp(1235, "01", 256, 42, "06.4", "2017-06-05", 1)
    assert.equal(inspWithoutId.id, undefined)
    assert.equal(inspWithoutId.km, 256)
    assert.equal(inspWithId.id, 1235)
    assert.equal(inspWithoutId.m, 42)
});

QUnit.test("Insp create from array", function(assert) {
    const inspWithoutId = Insp.fromArrayRow([undefined, "01", 256, 42, "06.4", "2017-06-05", 1])
    const inspWithId = Insp.fromArrayRow([1235, "01", 256, 42, "06.4", "2017-06-05", 1])
    assert.equal(inspWithoutId.id, undefined)
    assert.equal(inspWithoutId.km, 256)
    assert.equal(inspWithId.id, 1235)
    assert.equal(inspWithoutId.m, 42)
});

QUnit.test("Insp.normal", function(assert) {
    const date = new Date(2014, 1, 1)
    const values = [undefined, "", "   ", "  256", "  256  ", 42, "06.4   ", date, 0]
    assert.equal(Insp.normal(values[0]), undefined)
    assert.equal(Insp.normal(values[1]), undefined)
    assert.equal(Insp.normal(values[2]), undefined)
    assert.equal(Insp.normal(values[3]), "256")
    assert.equal(Insp.normal(values[4]), "256")
    assert.equal(Insp.normal(values[5]), 42)
    assert.equal(Insp.normal(values[6]), "06.4")
    //assert.equal(Insp.normal(values[7]), new Date(2014, 1, 1))
    assert.equal(Insp.normal(values[8]), 0)
});

QUnit.test("Insp vk", function(assert) {
    const inspWithoutId = Insp.fromArrayRow([undefined, "01", 256, 42, "06.4", "2017-06-05", 1])
    const inspWithId = Insp.fromArrayRow([1235, "01", 256, 42, "06.4", "2017-06-05", 1])
    assert.equal(inspWithoutId.vk, "id?-01.256.42-06.4-1")
    assert.equal(inspWithId.vk, "id1235-01.256.42-06.4-1")
});

QUnit.test("SingleInspValidator", function(assert) {
    const inspWithoutId = Insp.fromArrayRow([undefined, "01", 256, 42, "06.4", "2017-06-05", 1])
    const inspWithId = Insp.fromArrayRow([1235, "01", 256, 42, "06.4", "2017-06-05", 1])
    const inspNegativeIdMKmKelintasBadSkodas = Insp.fromArrayRow([-1235, "01", -256, -42, "x6.4", "2017-06-05", -1])
    const inspBadDataNowLinija = Insp.fromArrayRow([1235, "", 256, 42, "06.4", "2017-06-35", 1])
    
    validator = new SingleInspValidator(
        Validators.validateId, 
        Validators.validateKm, 
        Validators.validateKelintas, 
        Validators.validateTdata, 
        Validators.validateSkodas)
    
    const validatedWithoutId = validator.validate(inspWithoutId)
    const validatedWithId = validator.validate(inspWithId)
    const validatedNegativeIdMKmKelintasBadSkodas = validator.validate(inspNegativeIdMKmKelintasBadSkodas)
    const validatedBadDataNowLinija = validator.validate(inspBadDataNowLinija)
    
    assert.equal(validatedWithoutId.isValid, false)
    assert.equal(validatedWithoutId.flaws[0].methodId, "id")
    assert.equal(validatedWithId.isValid, true)
    assert.equal(validatedNegativeIdMKmKelintasBadSkodas.isValid, false)
    assert.equal(validatedNegativeIdMKmKelintasBadSkodas.flaws[0].methodId, "id")
    assert.equal(validatedNegativeIdMKmKelintasBadSkodas.flaws[1].methodId, "km")
    assert.equal(validatedNegativeIdMKmKelintasBadSkodas.flaws[2].methodId, "kelintas")
    assert.equal(validatedNegativeIdMKmKelintasBadSkodas.flaws[3].message, "salyginis kodas")
    assert.equal(validatedBadDataNowLinija.isValid, false)
    assert.equal(validatedBadDataNowLinija.length, 1)
    assert.equal(validatedBadDataNowLinija.flaws[0].methodId, "tdata")
    assert.throws(function() {new SingleInspValidator()}, /constructor/, "wrong exception")    
});

QUnit.test("BatchValidator", function(assert) {
    const inspWithoutId = Insp.fromArrayRow([undefined, "01", 256, 42, "06.4", "2017-06-05", 1])
    const inspWithId = Insp.fromArrayRow([1235, "01", 256, 42, "06.4", "2017-06-05", 1])
    const inspNegativeIdMKmKelintasBadSkodas = Insp.fromArrayRow([-1235, "01", -256, -42, "x6.4", "2017-06-05", -1])
    const inspBadDataNowLinija = Insp.fromArrayRow([1235, "", 256, 42, "06.4", "2017-06-35", 1])
    
    insps = [inspWithoutId, inspWithId,
        inspNegativeIdMKmKelintasBadSkodas,
        inspBadDataNowLinija]
    
    validator = new SingleInspValidator(
        Validators.validateId, 
        Validators.validateKm, 
        Validators.validateKelintas, 
        Validators.validateTdata, 
        Validators.validateSkodas)
    
    const batchValidator = new BatchValidator(validator)
    
    result = batchValidator.validate(insps)
    assert.equal(result.length, 4)
    assert.equal(result[0].isValid, false)
    assert.equal(result[0].flaws[0].methodId, "id")
    assert.equal(result[1].isValid, true)
    assert.equal(result[2].isValid, false)
    assert.equal(result[2].flaws[0].methodId, "id")
    assert.equal(result[2].flaws[1].methodId, "km")
    assert.equal(result[2].flaws[2].methodId, "kelintas")
    assert.equal(result[2].flaws[3].message, "salyginis kodas")
    assert.equal(result[3].isValid, false)
    assert.equal(result[3].length, 1)
    assert.equal(result[3].flaws[0].methodId, "tdata") 
});



