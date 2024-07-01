import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'mainpage', component: MainpageComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [AppComponent,LoginComponent],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'mainpage',
        component: MainpageComponent,
      },
    ]),
    
     // Add the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
