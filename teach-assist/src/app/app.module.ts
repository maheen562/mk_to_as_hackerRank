import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginService } from './login/login.service';
import { OCRComponent } from './ocr/ocr.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpagebodyComponent } from './mainpage/components/mainpagebody/mainpagebody.component';
import { TeachersubjectpageComponent } from './teachersubjectpage/teachersubjectpage.component';
import { StudentSubjectPageComponent } from './student-subject-page/student-subject-page.component';
import { PeerHelpComponent } from './peer-help/peer-help.component';
import { ReviseSubjectContentComponent } from './revise-subject-content/revise-subject-content.component';
import { UploadFilePageComponent } from './upload-file-page/upload-file-page.component';
//import { LoginService } from './login/login.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'OCR', component: OCRComponent },
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'studentSubject/peerHelp', component:PeerHelpComponent},
  { path: 'studentSubject/revision', component:ReviseSubjectContentComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'studentSubject', component:StudentSubjectPageComponent},
  {path: 'upload',component: UploadFilePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OCRComponent,
    MainpageComponent,
    MainpagebodyComponent,HeaderComponent,
    FooterComponent,TeachersubjectpageComponent,StudentSubjectPageComponent,UploadFilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
  ],
  exports: [FooterComponent],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
