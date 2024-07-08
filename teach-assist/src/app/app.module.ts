import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterOutlet } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ChatpageComponent } from './chatpage/chatpage.component';import * as PDFJS from 'pdfjs-dist';
import { GptComponent } from './gpt/gpt.component';
// import { GPTService } from './gpt/gpt.service';
import ChatGPT from 'chatgpt-api';
import { GPTService } from './gpt/gpt.service';
import { EditPageComponent } from './edit-page/edit-page.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { StudentsProgressPageComponent } from './students-progress-page/students-progress-page.component';
import { AccessFeedbackComponent } from './access-feedback/access-feedback.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'OCR', component: OCRComponent },
  { path: 'teacherSubject', component: TeachersubjectpageComponent },
  { path: 'teacherSubject', component: TeachersubjectpageComponent },
  { path: 'teacherSubject', component: TeachersubjectpageComponent },
  { path: 'studentSubject/peerHelp', component: PeerHelpComponent },
  { path: 'studentSubject/revision', component: ReviseSubjectContentComponent },
  { path: 'teacherSubject', component: TeachersubjectpageComponent },
  { path: 'studentSubject', component: StudentSubjectPageComponent },
  { path: 'upload', component: UploadFilePageComponent },
  { path: 'edit', component: EditPageComponent },
  { path: 'gpt', component: GptComponent },
  { path: 'studentProgress', component: StudentsProgressPageComponent },
  { path: 'accessFeedback', component: AccessFeedbackComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'studentSubject/peerHelp', component:PeerHelpComponent},
  { path: 'studentSubject/revision', component:ReviseSubjectContentComponent},
  { path: 'teacherSubject', component:TeachersubjectpageComponent},
  { path: 'studentSubject', component:StudentSubjectPageComponent},
  {path: 'upload',component: UploadFilePageComponent},
  {path: 'Chat',component: ChatpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    MainpagebodyComponent,HeaderComponent,
    FooterComponent,TeachersubjectpageComponent,StudentSubjectPageComponent,UploadFilePageComponent,PeerHelpComponent, ChatpageComponent,
    MainpagebodyComponent,
    HeaderComponent,
    OCRComponent,
    FooterComponent,
    TeachersubjectpageComponent,
    StudentSubjectPageComponent,
    UploadFilePageComponent,
    GptComponent,
    EditPageComponent,
    PeerHelpComponent,StudentsProgressPageComponent,
     AccessFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    PdfViewerModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [LoginService, GPTService],
  bootstrap: [AppComponent],
})
export class AppModule {}
