const queues = processList => {

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

    return list;

}

export default queues;