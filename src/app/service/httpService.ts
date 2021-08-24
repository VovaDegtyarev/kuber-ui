import { Message, StatusServer } from './../Models/interfaces';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {

    }

    SendMessage(message: Message) {
        const body = { messageId: message.messageId, date:message.date, message:message.message };

        this.http.post('http://localhost:7000/api/Broker/SendBroker', body, {responseType: 'text'}).subscribe(data => {
            console.log('sending');
        });
    }

    GetStatusServer() {
        return this.http.get('http://localhost:7000/api/Broker/GetStatus', {responseType: 'text'}).subscribe(data => {
            console.log(data);
        });
    }

}