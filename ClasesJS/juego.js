//import {Personaje} from "biblioteca.js"
function main()
{
	const spider = new Personaje("Spiderman");

	const div2 = document.getElementsByClassName("Detalle")[1];

	if (div2)
	{
		div2.innerHTML = `Mi nombre es: ${spider.name}`

	}
}
main();