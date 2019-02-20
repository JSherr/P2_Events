const EventEmitter = require('./events'); // Si cambiamos "events" por "./events" usaremos nuestro fichero de eventos en vez de la clase de node.
const later = require('later');

class Programador extends EventEmitter{

	constructor(horario){
		super();
		for (let i=0; i<horario.length; i++) {
			var progam = horario[i];
			later.date.localTime();
			const temp = progam.temperatura;
			later.setInterval(() => this.emit('ideal', temp), later.parse.text('at '+progam.hora));
		}
	}
}

exports = module.exports = Programador;

