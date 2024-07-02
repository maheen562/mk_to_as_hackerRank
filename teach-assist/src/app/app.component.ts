import { Component } from '@angular/core';
import { RouterOutlet,Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { MainpageComponent } from './mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teach-assist';  
}
