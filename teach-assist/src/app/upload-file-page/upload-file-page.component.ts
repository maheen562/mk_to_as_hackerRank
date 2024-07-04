import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-file-page',
  // standalone: true,
  // imports: [HeaderComponent, FooterComponent],
  templateUrl: './upload-file-page.component.html',
  styleUrl: './upload-file-page.component.css'
})
export class UploadFilePageComponent {
  constructor(private router:Router){}

  UploadFile(){
    this.router.navigate(['editPage']);
  }

}
