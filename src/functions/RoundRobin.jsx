const processaRoundRobin = (arrayProcessos, quantum) => {

	let totalTime = 0;
	
	arrayProcessos.forEach(element => {
		totalTime += element.processTime
	})
	
    
	let restanteQuantum = 0;
	let arrayRetorno = [];
	let elementoArrayRetorno = {

	};
	
	while(totalTime > 0){
		arrayProcessos.forEach(elemento =>{
			if(elemento.processTime !== 0){
				elementoArrayRetorno = elemento;
				if(restanteQuantum === 0){
					if(elemento.processTime < quantum){
						elemento.processTime -= elemento.processTime ;
						restanteQuantum = quantum - elemento.processTime;
						totalTime = totalTime - elemento.processTime;
						elementoArrayRetorno.processTime = elemento.processTime;
					}else{
						elemento.processTime = elemento.processTime - quantum;
						totalTime = totalTime - quantum;
						elementoArrayRetorno.processTime = elemento.processTime;
					}
				}else{
					if(elemento.processTime < restanteQuantum){
						elemento.processTime -= elemento.processTime;
						restanteQuantum = restanteQuantum - elemento.processTime;
						totalTime = totalTime - elemento.processTime;
						elementoArrayRetorno.processTime = elemento.processTime;
					}else{
						elemento.processTime = elemento.processTime - restanteQuantum;
						totalTime = totalTime - restanteQuantum;
						elementoArrayRetorno.processTime = elemento.processTime ;
					}
				}
				
				arrayRetorno.push(teste(elementoArrayRetorno, elementoArrayRetorno.processTime));	
			}
		})
	}
    return arrayRetorno;
}

const teste = (element, time) => {
	return {
		processName: element.processName,
        processType: element.processType,
        processTime: element.processTime,
        processPriority: element.processPriority,
        processExecutionTime: element.processExecutionTime,
        processTimeLeft: time
	}
}

export default processaRoundRobin;