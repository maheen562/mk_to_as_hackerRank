import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  result: string = '';
  type: string = 'student';
  // modul:any * ();

  // constructor(private loginService: LoginService) { }
  // loginUser(){
  
  // }

  // // public Jsonreply: any;

  // // constructor(private http: HttpClient) {

  // // } 


  getLoginInformation():void{
    console.log(this.username);
  }
}

