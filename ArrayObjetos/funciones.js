//Funciones js
function saludo() {
	document.write("\
		<h1>Ejemplo de impresión</h1>\
		<ol>\
			<li>primer saludo</li>\
			<li>segundo saludo</li>\
			<li>tercer saludo</li>\
		</ol>\
		");
}

function crearArrarTradicional()
{
	let primos = [1,2,3,5,7,9,11,13,17,23,29,31];
	//const divArregloTradicional = document.getElementById("divArrayIndice");
	//const divArregloTradicional = document.querySelector("#divArrayIndice");
	const divArregloTradicional = document.querySelectorAll("div");


	//innerHTML, innerText, textContent
	divArregloTradicional.innerHTML = "<hr> <strong> Arreglo de primos = </strong> " + primos+"</hr>"

}
function arrayAsociativo()
{	
	const alumno = Object();
	alumno["Nombre"] = "Juan";
	alumno["apellidoPat"] ="Sánchez";
	alumno["apellidoMat"] = "Pérez";
	alumno["Semestre"] = "6";
	alumno["regular"] = true;
	alumno.direccion = new Object();
	alumno.direccion.calle = "Av.Insurgentes";
	alumno.direccion.numExterior = 330;
	alumno.direccion.colonia = "David Gustavo Gutiérrez";
	alumno.direccion.cp = 77010;


	
	//Notacion Json
	let nuevoAlumno = 
	{
		Nombre: "Cesar",
		apellidoPat: "Camara",
		apellidoMat: "Torres",
		Semestre: 246,
		regular:false,
		direccion : 
		{
			calle:"Cresta",
			numExterior:392,
			colonia:"La Verga",
			cp:77038
		}
	};
	
//JSON Cadenas que representan objetos
	let cadAlumnoIntercambio = '{\
		"Nombre": "Alexis",\
		"apellidoPat": "Gamboa",\
		"apellidoMat": "Villalobos",\
		"Semestre": 6\
		"regular":true,\
		"direccion" : \
		{\
			"calle":"Granada",\
			"numExterior":278,\
			"colonia":"Granada",\
			"cp":77086\
	}\
}';

	let objAlumnoIntercambio = JSON.parse(cadAlumnoIntercambio);
	objAlumnoIntercambio.Nombre = "Omar Alexis";
	


	const divAsoc = document.getElementsByTagName("div");
	divAsoc[1].innerHTML = "Alumno Nombre = " + alumno.Nombre + 
	"<br/> Apellido paterno = "+alumno.apellidoPat
	+"<br/>direccion = "+alumno.direccion.calle + " " + alumno.direccion.numExterior  // divAsociativos

	let elemClass = document.getElementsByClassName("POO");
	elemClass[2].innerHTML = "alumno = "+ JSON.stringify(alumno);
	elemClass[2].innerHTML = "<br/>Alumno de intercambio = "+ JSON.stringify(objAlumnoIntercambio);

}