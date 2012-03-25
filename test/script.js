//http://stackoverflow.com/questions/946534/insert-text-into-textarea-with-jquery
//http://stackoverflow.com/questions/946534/insert-text-into-textarea-with-jquery
//http://stackoverflow.com/questions/263743/how-to-get-cursor-position-in-textarea
//http://www.myvirtualkeyboard.com/index.php

//var console = window.console || { log: function() {}};
var urapa = {};
urapa.isAlt = false;
urapa.log = function(msg) {
    console.log(msg);
};
urapa.listen = function(evnt, elem, func) {
    //http://snipplr.com/view/3116/cross-browser-add-event-listener/
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
         var r = elem.attachEvent("on"+evnt, func);
	return r;
    }
};
urapa.replace = function(code) {
	if (urapa.isAlt) {
		var text = urapa.input.innerText;
		var newText;
		if (code == 69) {
			newText = text.replace(/.$/, "ĕ");
		}
		if (code == 85) {
			newText = text.replace(/.$/, "ü");
		}
		if (code == 83) {
			newText = text.replace(/.$/, "š");
		}
		if (code == 65) {
			newText = text.replace(/.$/, "ă");
		}
		if (newText) {
			urapa.input.innerText = newText;
		}
	}
};
urapa.keydown = function(e) {
	var event = window.event || e;
	var code = event.keyCode || event.which;
	urapa.log(code);
	if (code == 18) urapa.isAlt = true;
	else urapa.replace(code);
};
urapa.keyup = function(e) {
	var event = window.event || e;
	var code = event.keyCode || event.which;
	urapa.log(code);
	if (code == 18) urapa.isAlt = false;
	else urapa.replace(code);
};
urapa.init = function() {
	urapa.input = document.getElementById("input");
	urapa.listen("keydown", urapa.input, urapa.keydown);
	urapa.listen("keyup", urapa.input, urapa.keyup);
	urapa.logArea = document.getElementById("log");
};
window.onload = urapa.init;