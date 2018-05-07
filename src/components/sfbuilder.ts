export class SnowflakeBuilder {
    
    private WORKERID: number;
    private PROCESSID: number;
    private sequenceId: number;

    constructor(workerId: number, processId: number) {
        this.WORKERID = workerId;
        this.PROCESSID = processId;
    }

    get ProcessID() {
        return this.PROCESSID;
    }
    get WorkerID() {
        return this.WORKERID;
    }
    get nextSequence() {
        const seq = this.sequenceId; 
        this.sequenceId++;
        const nSeq = seq +1; 
        // mutex
        return nSeq;
    }

    get NextID() {
        // this needs a mutex, but yolo jankoscript
        const seq = this.nextSequence
        /* tslint:disable */
        return 0x7FFFFFFFFFFFFFFF & seq
        /* tslint:enable */
    }
}