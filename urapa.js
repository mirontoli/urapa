//http://stackoverflow.com/questions/946534/insert-text-into-textarea-with-jquery
//http://stackoverflow.com/questions/946534/insert-text-into-textarea-with-jquery
//http://stackoverflow.com/questions/263743/how-to-get-cursor-position-in-textarea
//http://www.myvirtualkeyboard.com/index.php

//var console = window.console || { log: function() {}};
var urapa = function(elem) {
    urapa.input = elem;
    console.log(elem);
    urapa.listen("keydown", urapa.input, urapa.keydown);
    urapa.listen("keyup", urapa.input, urapa.keyup);
};
urapa.isAlt = false;
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
            newText = "ĕ";
		}
		if (code == 85) {
			newText = "ü";
		}
		if (code == 83) {
			newText = "š";
		}
		if (code == 65) {
			newText = "ă";
		}
		if (newText) {
			urapa.input.innerText = text + newText;
            return true;
		}
	}
};
urapa.keydown = function(e) {
	var event = window.event || e;
	var code = event.keyCode || event.which;
	console.log(code);
	if (code == 18) urapa.isAlt = true;
	else {
        var replaced = urapa.replace(code);
        if (replaced) {
            event.preventDefault();
        }
	}
};
urapa.keyup = function(e) {
	var event = window.event || e;
	var code = event.keyCode || event.which;
	console.log(code);
	if (code == 18) urapa.isAlt = false;
	//else urapa.replace(code);
}; 