import { Message } from './../Models/interfaces';
import { HttpService } from './../service/httpService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit {
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  value1 = 'Clear me';
  value2 = "test";
  value3 = "test3";

  public mess: Message;

  submit(message: string) {
    this.mess = {
      messageId: '10ebfc32-721b-44fd-a6d0-07e74777c8c2',
      date: Date.now().toString(),
      message: message
    }

    this.httpService.SendMessage(this.mess);
  }

  checkServerStatus() {
    this.httpService.GetStatusServer();
  }

}
