//https://www.youtube.com/watch?v=74X18AoZ2Gk
import { LOGIN_URL } from '../../constants/urls';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

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
  //modul:any * ();
  reply : any ;

  postData= {
    "email" : this.username,
    "password" : this.password,
    "type" : this.type
  }
  // constructor(private http:HttpClient) {
  //   this.http.post(LOGIN_URL,this.postData).toPromise().then(data => {
  //     this.reply = data;
  //     console.log(data)
  //   })
  // }
  //constructor(private loginService: LoginService) { }
  // loginUser(){
  //   var username = this.username;
  //   var password = this.password;
  //   var type = this.type

  //   this.loginService.getUserDetails(username,password,type).subscribe(
  //     Response => {
  //       console.log("Success",Response);
  //     },
  //     Error => {
  //       console.error("unsucessful")
  //     }
      
  //   );
  // }
  // public Jsonreply: any;

  // // constructor(private http: HttpClient) {

  // // } 


  getLoginInformation():void{
    console.log(this.username);
  }
}

