const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')


if (isMainThread) {
console.log('Strating the main thread');

const worker = new Worker(__filename, {
    workerData :{
        outputPrefix: 'Received message',
        timeToWaste: 500
    }
});

worker.on('message', (msg) => {
    console.log(`Worker: ${msg}`);
});

worker.postMessage('Done with my work')

console.log('Still in the main thread')
} else {


 parentPort.on('message', (msg) => {
    console.log(`${workerData.outputPrefix } ${msg}`);
 });

 parentPort.postMessage('Getting started');
 wasteTime(workerData.timeToWaste);
 parentPort.postMessage('In the middle');
 wasteTime(workerData.timeToWast);
 parentPort.postMessage('all done');


}

function wasteTime(delay) {
    const end = Date.now() + delay;

    while(Date.now() < end) {

    }
}

/*
 * You need pass file name into worker __filename selects current file
 * parentPort.postMessage sends message to the main thread
 * 
 * 
 */