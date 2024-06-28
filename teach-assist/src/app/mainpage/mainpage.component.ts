import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MainpagebodyComponent } from './components/mainpagebody/mainpagebody.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MainpagebodyComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
