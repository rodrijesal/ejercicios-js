const edad = prompt("Introduce tu edad");

if (Number(edad) == edad) {
	
	if (edad >= 18) {
	
		document.write("Puedes conducir");
	}
}
else  {

	document.write(`no tienes edad suficiente para conducir.`)}
	