function cargarDatos() {
	const promise = fetch("/datos.xml");

	promise.then(function()
	{
		const divContent = document.getElementById("Contenedor");
		if(divContent)
		{
			divContent.innerHTML = response;

		}

	});
}