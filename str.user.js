// ==UserScript==
// @name          Trafikskolans instuderingsfrågor
// @namespace     http://twitter.com/meeiw
// @author        Kristian Hellquist
// @description   Använd a-f för att markera svarsalternativ. "k" är klar. "f" är frammåt. "n" är Nästa, "p" är föregående
// @version       1.1
// @include       http://*.str.se/*
// @include       https://*.str.se/*
// ==/UserScript==

// foo

function shortcut(e){
    var evtobj=window.event? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
    var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode
    switch(String.fromCharCode(unicode)){
    case "a":
	document.getElementById("ctl00_cphBody_radAltA").checked="1";
	break;
    case "b":
	document.getElementById("ctl00_cphBody_radAltB").checked="1";
	break;
    case "c":
	document.getElementById("ctl00_cphBody_radAltC").checked="1";
	break;
    case "d":
	document.getElementById("ctl00_cphBody_radAltD").checked="1";
	break;
    case "e":
	document.getElementById("ctl00_cphBody_radAltE").checked="1";
	break;
    case "f":
	document.getElementById("ctl00_cphBody_radAltF").checked="1";
	break;
    case "k":
	document.getElementById("ctl00_cphBody_btnKlar").disabled=false;
	document.getElementById("ctl00_cphBody_btnKlar").click();
	break;
    case "n":
	document.getElementById("ctl00_cphBody_btnNext").click()
	break;
    case "p":
	document.getElementById("ctl00_cphBody_btnPrev").click()
	break;

    }
}

document.onkeypress=shortcut;

/*
ctl00_cphBody_btnVisareAterga
ctl00_cphBody_btnPrev
ctl00_cphBody_btnMarkera
ctl00_cphBody_btnOversikt
*/