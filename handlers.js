
function onInputHandler(id) {
    var txtarea = document.getElementById(id)
    var txt = txtarea.value;
    console.log("txt", txt);
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