import { Message } from './../Models/interfaces';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {

    }

    SendMessage(message: Message) {
        const body = { messageId: message.messageId, date:message.date, message:message.message };

        this.http.post<Message>('https://localhost:7000/api/Broker/SendBroker', body).subscribe(data => {
            console.log('sending');
        });

    }


}