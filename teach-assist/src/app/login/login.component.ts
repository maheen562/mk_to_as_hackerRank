//https://www.youtube.com/watch?v=74X18AoZ2Gk
import { LOGIN_URL } from '../../constants/urls';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  result: string = '';
  type: string = 'student';
  errorMessage = '';
    reply: any;


  constructor(private loginService: LoginService, private router: Router) {}

    loginUser() {
      if (this.username && this.password) {
        // Implement your login logic here, for example, call an API to authenticate the user
         this.router.navigate(['mainpage']);

        // Navigate to the main page after successful login
          // this.loginService.getUserDetails(this.username,this.password,this.type).subscribe(
          //   (response: any) => {
          //     if (response && response.status === true && response.token) {
          //       // Login successful, navigate to main page
          //       this.router.navigate(['mainpage']);
          //     } else {
          //       // Handle invalid login response (if needed)
          //       this.errorMessage = 'Username or password incorrect.';
          //     }
          //   },
          //   (error) => {
          //     console.error('Error:', error);
          //     // Handle HTTP error response
          //     this.errorMessage = 'username or password incorrect';
          //   }
          // );
        
      } else {
        this.errorMessage = 'Please enter both username and password.';
        
      }
      }
  }

  // public Jsonreply: any;

  // // constructor(private http: HttpClient) {

  // // }

  // getLoginInformation():void{
  //   console.log(this.username);
  // }
