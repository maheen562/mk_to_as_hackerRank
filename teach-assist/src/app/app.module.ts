import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginService } from './login/login.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent }
];


@NgModule({
  declarations: [ AppComponent,
    LoginComponent, LoginService
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule, RouterOutlet,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


