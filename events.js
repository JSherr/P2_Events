class EventEmitter{

	constructor(){
		this.events = {};
	}
	 // recpt sera el "listener" que contiene la funcion que ejecuta el evento.
	on(nameEvents, recpt){
		if(!this.events[nameEvents]){
			this.events[nameEvents] = []; // Si no existe la posicion del array la creo. Para añadirle luego el recpt correspdiente al evento.
		}

		this.events[nameEvents].push(recpt); // Con el "push" podemos añadir elementos a un array en JS. Para quitarlos usamos "pop". 

	}

	emit(nameEvents, data){
		if(this.events[nameEvents]){
			this.events[nameEvents].forEach(rf => rf.call(null, data)); //rf = "Return function". Si no hay datos (argumentos) paso null, si los hay paso data.
		}

	}
}

exports = module.exports = EventEmitter;
