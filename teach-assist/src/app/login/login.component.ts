import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [FormsModule,HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  result: string = '';
  type: string = 'student';
  
  // public Jsonreply: any;

  // constructor(private http: HttpClient) {

  // } 
  getLoginInformation():void{
    console.log(this.username);
  }
}
