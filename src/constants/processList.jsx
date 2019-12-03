import ProcessType from './processType';

const processList = [
    {
        processName: 'A',
        processType: ProcessType.IO,
        processTime: '10',
        processPriority: '1',
    },
    {
        processName: 'B',
        processType: ProcessType.CPU,
        processTime: '15',
        processPriority: '3',
    },
    {
        processName: 'C',
        processType: ProcessType.IO,
        processTime: '10',
        processPriority: '7',
    },
    {
        processName: 'D',
        processType: ProcessType.CPU,
        processTime: '20',
        processPriority: '5',
    },
]

export default processList;