import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-student-subject-page',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './student-subject-page.component.html',
  styleUrl: './student-subject-page.component.css'
})
export class StudentSubjectPageComponent {

}
