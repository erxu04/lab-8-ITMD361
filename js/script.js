function init(){
	var button = document.getElementById("entrybutton");
  var result = document.getElementById("textoutput").innerHTML; //stores copy of html element's content into variable result for console printing
  
  function myEventText(){
		var textInput = document.getElementById("entryinput").value;
  	alert("Emily Xu: " + textInput);
    console.log("Alert executed!");
    console.log("textInput: " + textInput);
    console.log("initial result: " + result);
    /* result = textInput; */	//this doesn't change the actual html content, just the value stored in result variable which is not tied to HTML
    document.getElementById("textoutput").innerHTML = textInput; //directly affects HTML element
    
    console.log("New result: " + result);
  }
  
  
  
  button.addEventListener("click", myEventText);
  
  
  
}

window.addEventListener('load', init)