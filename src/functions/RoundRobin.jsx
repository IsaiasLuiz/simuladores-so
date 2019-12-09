const roundRobin = (arrayProcessos, quantum) => {

	let totalTime = 0;
	
	arrayProcessos.forEach(element => {
		totalTime += element.processTime
	})
	
    
	let remaningQuantum = 0;
	let auxiliaryArray = [];
	let elementAuxiliaryArray = {

	};
	
	
	while(totalTime > 0){
		arrayProcessos.forEach(element => {
			if(element.processTime !== 0){
				elementAuxiliaryArray = element;
				if(remaningQuantum === 0){
					if(element.processTime < quantum){
						element.processTime -= element.processTime ;
						remaningQuantum = quantum - element.processTime;
						totalTime = totalTime > element.processTime ? 0 : totalTime - element.processTime;
						elementAuxiliaryArray.processTime = element.processTime;
					}else{
						element.processTime = element.processTime - quantum;
						totalTime = totalTime - quantum;
						elementAuxiliaryArray.processTime = element.processTime;
					}
				}else{
					if(element.processTime < remaningQuantum){
						element.processTime -= element.processTime;
						remaningQuantum = remaningQuantum - element.processTime;
						totalTime = totalTime > element.processTime ? 0 : totalTime - element.processTime;
						elementAuxiliaryArray.processTime = element.processTime;
					}else{
						element.processTime = element.processTime - remaningQuantum;
						totalTime = totalTime - remaningQuantum;
						elementAuxiliaryArray.processTime = element.processTime ;
					}
				}
				
				auxiliaryArray.push(newProcess(elementAuxiliaryArray, elementAuxiliaryArray.processTime));	
			}
		})
		

	}
    return auxiliaryArray;
}

const newProcess = (element, time) => {
	return {
		processName: element.processName,
        processType: element.processType,
        processTime: element.processTime,
        processPriority: element.processPriority,
        processExecutionTime: element.processExecutionTime,
        processTimeLeft: time
	}
}

export default roundRobin;