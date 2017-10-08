class Processor {
    
    run(input) {
        const rowLength = 13
        
        // 1. nuskaito kaip masyvą
        // 2. išmeta tuščias eilutes, sutrumpina iki nustatyto ilgio
        var dtParser = new DataTextParser(rowLength)
        var arr = dtParser.textToArray(input)
        console.log("arr", arr)
        
        // 3. gamina Inspection objektus
        var insps = arr.map(row => Insp.fromArrayRow(row))
        console.log("insps", insps)
        
        //  4. tikrina Inspections ir gamina ValidatedInspections
        // {insp: inspection, flaws: [Flaw={message, methodId}]}
        var inspValidator = new SingleInspValidator(Validators)
        var batchValidator = new BatchValidator(inspValidator)
        var validatedInsps = batchValidator.validate(insps)
        console.log("validatedInsps", validatedInsps)

        
        // 5. gamina eilutes        
        var source   = document.getElementById("table-template").innerHTML;
        //console.log("template", source)
        var template = Handlebars.compile(source);
        //console.log("compiled template", template)
        var html = template(validatedInsps)
        //console.log("html", html)
        document.getElementById("input-records").innerHTML = html;

        var submitButton = document.getElementById("submit-button");
        var canSubmit = validatedInsps.every(vi => vi.flaws.length === 0 || (vi.flaws.length === 1 && vi.flaws[0].methodId === "validateForVkRepeats"))
        console.log("canSubmit", canSubmit)
        if (canSubmit) {          
          document.getElementById("submit-button").addEventListener("click", function(evt) {            
              evt.preventDefault();
              var xhr = new XMLHttpRequest();
              xhr.open('POST', 'operator.php', true);
              xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
              xhr.onload = function() {
                  console.log(this.responseText);
              }
              var recs = "records=" + JSON.stringify(insps);
              xhr.send(recs);            
          });
        }
        submitButton.disabled = !canSubmit;
    }    
}
    
Handlebars.registerHelper('joined', function(items, options) {
  var joined = items.map(f => f.message).join("<br>")
  return new Handlebars.SafeString(joined);
})


    
// Handlebars.registerHelper('if_has', function(flaws, options) {
//     console.log("flaws in helper", flaws)
//   if (flaws.length > 0) return options.fn(this)       
// })

Handlebars.registerHelper('class_by_flaws', function(flaws, options) {
  if (flaws.length === 0) return new Handlebars.SafeString('class="noflaws"');
  if (flaws.length === 1 && flaws[0].methodId == "validateForVkRepeats" ) return new Handlebars.SafeString('class="warning"');
  return new Handlebars.SafeString('class="errors"');
});