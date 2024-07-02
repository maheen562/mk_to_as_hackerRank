//https://www.youtube.com/watch?v=74X18AoZ2Gk
import { LOGIN_URL } from '../../constants/urls';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = 'vbdgs';
  password: string = 'gegw';
  result: string = '';
  type: string = 'student';

  reply: any;
  //submitted: boolean = false;

  // postData= {
  //   "email" : this.username,
  //   "password" : this.password,
  //   "type" : this.type
  // }

  constructor(private loginService: LoginService, private router: Router) {}

    loginUser() {
      if (this.username && this.password) {
        // Implement your login logic here, for example, call an API to authenticate the user

        // Navigate to the main page after successful login
          this.loginService.getUserDetails(this.username,this.password,this.type).subscribe(
            Response => {
              console.log("Success",Response);
              this.router.navigate(['/mainpage']);
            },
            Error => {
              console.error("unsucessful")
            },
          );
        
      } else {
          alert('Please enter both username and password.');
      }
      }
  }

  // public Jsonreply: any;

  // // constructor(private http: HttpClient) {

  // // }

  // getLoginInformation():void{
  //   console.log(this.username);
  // }
