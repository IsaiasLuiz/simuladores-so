import ProcessType from './processType';

const processList = [
    {
        processName: 'A',
        processType: ProcessType.IO,
        processTime: '10',
        processPriority: '2',
        processExecutionTime: 5
    },
    {
        processName: 'B',
        processType: ProcessType.CPU,
        processTime: '15',
        processPriority: '1',
        processExecutionTime: 5
    },
    {
        processName: 'C',
        processType: ProcessType.IO,
        processTime: '10',
        processPriority: '7',
        processExecutionTime: 5
    },
    {
        processName: 'D',
        processType: ProcessType.CPU,
        processTime: '20',
        processPriority: '3',
        processExecutionTime: 5
    },
]

export default processList;