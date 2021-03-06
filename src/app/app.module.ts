import { HttpService } from './service/httpService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SendFormComponent } from './send-form/send-form.component';
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SendFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
