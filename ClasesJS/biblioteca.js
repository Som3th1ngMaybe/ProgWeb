class Personaje
{
	name;
	type = "Player";
	lifes=5;
	energy=10;

	constructor(name)
	{
		this.name = name;
		console.log(`¡Bienvenido/a , ${this.name}!`);

	}

	hola()
	{
		return this.name;
	}

}

