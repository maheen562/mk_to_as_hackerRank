import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-mainpagebody',
  //standalone: true,
  templateUrl: './mainpagebody.component.html',
  styleUrl: './mainpagebody.component.css'
//   imports: [CommonModule]
})
export class MainpagebodyComponent {
  subjects = [
    { code: 'Comp30023', name: 'Computer Systems' },
    { code: 'Comp10023', name: 'Introduction to the New World' }
  ];
}
