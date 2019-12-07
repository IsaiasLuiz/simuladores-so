const piority = processList => {
    processList.sort((a, b)=>(a.processPriority - b.processPriority));

    const list = [];

    processList.forEach(element=> {
        list.push({
            processName: element.processName,
            processType: element.processType,
            processTime: element.processTime,
            processPriority: element.processPriority,
            processExecutionTime: element.processExecutionTime,
            processTimeLeft: element.processTime
        });
    });
    const priorityList = [];

    const length = processList.length;
    
    for(let i = 0; i < length; i++){
        priorityList.push(list.pop());
    }

    return priorityList;

}

export default piority;