//https://www.youtube.com/watch?v=leMy-yvU9tY

import { HttpClient, HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { LOGIN_URL } from '../../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  getUserDetails(username: String,password:String,type:String){
    const loginData= {
      "email" : username,
      "password" : password,
      "type" : type
    }

    return this.http.post("http://localhost:3000/login",loginData);
  }
  

}
