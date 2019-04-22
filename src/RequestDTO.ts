import {Connection} from './connect';

export class RequestDTO {
    private connection: Connection;

    public connect(custom: Connection): RequestDTO {
        this.connection = custom;
        return this;
    }

    public request() {

    }
}