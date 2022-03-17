var menuopen = false;

document.getElementById("leftlogo").addEventListener("click", function() {
  ShowMenu();
});
document.getElementById("usersettings").addEventListener("click", function() {
  ShowUsettings();
});
document.getElementById("cbcloseimg").addEventListener("click", function() {
  Closecb();
});
document.getElementById("cbbackimg").addEventListener("click", function() {
  GoBack();
});

document.getElementById("mainbody").addEventListener("click", function() {
  if(menuopen == true) {
	document.getElementById("lefttopmenu").style.display = "none";
	setTimeout(() => {menuopen = false;}, 100);
  }
});

document.getElementById("opt1").addEventListener("click", function() {
   ShowPage('<p class="cbtoptext" >Editace už. účtu</p>');
});
document.getElementById("opt2").addEventListener("click", function() {
  ShowPage('<p class="cbtoptext" >Sloučení účtů</p>');
});
document.getElementById("opt3").addEventListener("click", function() {
  ShowPage('<p class="cbtoptext" >Přepnout účet</p>');
});
document.getElementById("opt4").addEventListener("click", function() {
  ShowPage('<p class="cbtoptext" >Změna hesla</p>');
});
document.getElementById("opt5").addEventListener("click", function() {
  ShowPage('<p class="cbtoptext" >Odhlášení proběhlo úspěšně</p>');
});

var y = document.getElementsByClassName("cbmidimage");
var i;
for (i = 0; i < y.length; i++) {
	y[i].addEventListener("touchstart", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.filter = "invert(90%) sepia(24%) saturate(4890%) hue-rotate(359deg) brightness(106%) contrast(104%)"; 
	});
	y[i].addEventListener("touchend", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.filter = "invert(94%) sepia(67%) saturate(0%) hue-rotate(108deg) brightness(101%) contrast(104%)"; 
	});
}
var k = document.getElementsByClassName("cbmidtext");
var l;
for (l = 0; l < k.length; l++) {
	k[l].addEventListener("touchstart", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.color = "#FFDF01"; 
	});
	k[l].addEventListener("touchend", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.color = "white"; 
	});
}
var m = document.getElementsByClassName("menubutton");
var n;
for (n = 0; n < m.length; n++) {
	m[n].addEventListener("touchstart", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.color = "#084fc2"; 
	});
	m[n].addEventListener("touchend", function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.color = "#0099ff"; 
	});
}
document.getElementById("cbcloseimg").addEventListener("touchstart", function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	target.style.filter = "invert(90%) sepia(24%) saturate(4890%) hue-rotate(359deg) brightness(106%) contrast(104%)"; 
});
document.getElementById("cbcloseimg").addEventListener("touchend", function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	target.style.filter = "invert(94%) sepia(67%) saturate(0%) hue-rotate(108deg) brightness(101%) contrast(104%)"; 
});
document.getElementById("cbbackimg").addEventListener("touchstart", function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	target.style.filter = "invert(90%) sepia(24%) saturate(4890%) hue-rotate(359deg) brightness(106%) contrast(104%)"; 
});
document.getElementById("cbbackimg").addEventListener("touchend", function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	target.style.filter = "invert(94%) sepia(67%) saturate(0%) hue-rotate(108deg) brightness(101%) contrast(104%)"; 
});

function ShowMenu(){
	if(menuopen == false) {
		document.getElementById("lefttopmenu").style.display = "block";
		setTimeout(() => {menuopen = true;}, 100);
	}
}
function ShowUsettings(){
	document.getElementById("lefttopmenu").style.display = "none";
	document.getElementById("centerboard").style.display = "block";
	menuopen = false;
}
function Closecb(){
	document.getElementById("centerboard").style.display = "none";
}

function GoBack(){
	document.getElementById("cbbuttons").style.visibility = "visible";
	document.getElementById("cbtoptext").innerHTML = '<p class="cbtoptext" >Nastavení účtu</p>';
	document.getElementById("cbcloseimg").style.display = "block";
	document.getElementById("cbbackimg").style.display = "none";
}

function ShowPage(page){
	document.getElementById("cbbuttons").style.visibility = "hidden";
	document.getElementById("cbtoptext").innerHTML = page;
	document.getElementById("cbbackimg").style.display = "block";
	document.getElementById("cbcloseimg").style.display = "none";
}