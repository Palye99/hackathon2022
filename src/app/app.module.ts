import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TerminalComponent } from './component/terminal/terminal.component';
import {NgTerminalModule} from 'ng-terminal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TerminalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgTerminalModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
