
function onInputHandler(id) {
	document.getElementById("server-response-container").innerHTML = ""
	document.getElementById("input-records").innerHtml = ""
	document.getElementById("submit-button").disabled = true
    var txtarea = document.getElementById(id)
    var txt = txtarea.value;
    console.log(txt);
    var processor = new Processor()
    processor.run(txt)
    //document.getElementById("demo").innerHTML = table;
    txtarea.blur()
}

function onFocusHandler(id) {
    var txtarea = document.getElementById(id)
    txtarea.value = ""
}

function onClickHandler(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'operator.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoced');
    xhr.onload = function() {
        console.log(this.responseText);
    }
    xhr.send();    
}


function onSubmitHandler(e) {
  var submitButton = arguments[0]
  var resp = arguments[1] // server response div
  var insps = arguments[2] // inspections
  var evt = arguments[3]
  evt.preventDefault()
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/save', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = function() {				
	if (this.status == 204) {
	  console.log("status 204, NO CONTENT")
	  resp.innerHTML = "<div id=\"server-response\" class=\"response-200\">Serverio atsakymas: PRIIMTA ir ĮRAŠYTA (◑‿◐)</div>"
	  forbidSending()
	  return
	}
	
	if (this.status == 400) {
	  console.log("status 400, BAD REQUEST")
	  resp.innerHTML = "<div id=\"server-response\" class=\"response-400\">Serverio atsakymas: ATMESTA, YRA KLAIDŲ ĮRAŠUOSE  (╯°□°）╯</div>"
	  forbidSending()
	  return
	}
	
	if (this.status == 500) {
	  console.log("status 500, SERVER INTERNAL ERROR")
	  resp.innerHTML = "<div id=\"server-response\" class=\"response-500\">Serverio atsakymas: NEĮRAŠYTA - SERVERIO KLAIDA  ◔_◔</div>"
	  // leidžiama kartoti užklausą
	  return
	}
	
	if (this.status == 404) {
	  console.log("status 404, NOT FOUND")
	  resp.innerHTML = "<div id=\"server-response\" class=\"response-400\">Serverio atsakymas: UŽKLAUSA NEPASIEKĖ SERVERIO  ¯\_(⊙︿⊙)_/¯</div>"
	  // leidžiama kartoti užklausą
	  return
	}

	console.log("status " + this.status + ", UNKNOWN")
	resp.innerHTML = "<div id=\"server-response\" class=\"response-unknown\">Serverio atsakymas: BBZ  ¯\_(ツ)_/¯</div>"
	forbidSending()
  }
  xhr.onerror = function() {
	resp.innerHTML = "<div id=\"server-response\" class=\"response-400\">Serverio atsakymas: PIETŲ PERTRAUKA ╭∩╮（︶︿︶）╭∩╮</div>"
  }
  xhr.send(JSON.stringify(insps));	
  function forbidSending() {
	  insps.splice(0); 
	  submitButton.removeEventListener("click", onSubmitHandler); 
	  submitButton.disabled = true; 
  }
}