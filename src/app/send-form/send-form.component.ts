import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-form',
  templateUrl: './send-form.component.html',
  styleUrls: ['./send-form.component.scss']
})
export class SendFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value1 = 'Clear me';
  value2 = "test";
  value3 = "test3";
}
