const helpers = {}


//Obtener nombre aleatorio que esta dentro de lo perimitido (possbile)
helpers.randomNumber = () => {
	const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let randomNumber = 0;
	for (let i=0; i<8; i++)
	{
		randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));	
	}
	return randomNumber;
};

module.exports = helpers;