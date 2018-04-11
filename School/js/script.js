var elem1 = document.getElementById("button1") ;
var elem2 = document.getElementById("button2") ;
var elem3 = document.getElementById("button3") ;
var elem4 = document.getElementById("button4") ;
var elem5 = document.getElementById("button5") ;
var elem6 = document.getElementById("button6") ;

var cont1 = document.getElementById("showElement1") ;
var cont2 = document.getElementById("showElement2") ;
var cont3 = document.getElementById("showElement3") ;
var cont4 = document.getElementById("showElement4") ;
var cont5 = document.getElementById("showElement5") ;
var cont6 = document.getElementById("showElement6") ;

	cont1.style.display = "block";
	cont2.style.display = "none";
	cont3.style.display = "none";
	cont4.style.display = "none";
	cont5.style.display = "none";
	cont6.style.display = "none";
	elem1.style.background = "#869b62";
	elem2.style.background = "#c1c587";
	elem3.style.background = "#c1c587";
	elem4.style.background = "#c1c587";
	elem5.style.background = "#c1c587";
	elem6.style.background = "#c1c587";

function reset_element () {
	cont1.style.display = "none";
	cont2.style.display = "none";
	cont3.style.display = "none";
	cont4.style.display = "none";
	cont5.style.display = "none";
	cont6.style.display = "none";
	elem1.style.background = "#c1c587";
	elem2.style.background = "#c1c587";
	elem3.style.background = "#c1c587";
	elem4.style.background = "#c1c587";
	elem5.style.background = "#c1c587";
	elem6.style.background = "#c1c587";
}

elem1.onclick = function () {
	reset_element();
	cont1.style.display = "block";
	elem1.style.background = "#869b62";
}

elem2.onclick = function () {
	reset_element();
	cont2.style.display = "block";
	elem2.style.background = "#869b62";
}

elem3.onclick = function () {
	reset_element();
	cont3.style.display = "block";
	elem3.style.background = "#869b62";
}

elem4.onclick = function () {
	reset_element();
	cont4.style.display = "block";
	elem4.style.background = "#869b62";
}

elem5.onclick = function () {
	reset_element();
	cont5.style.display = "block";
	elem5.style.background = "#869b62";	
}

elem6.onclick = function () {
	reset_element();
	cont6.style.display = "block";
	elem6.style.background = "#869b62";	
}