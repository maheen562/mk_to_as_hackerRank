import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { TeachersubjectpageComponent } from '../teachersubjectpage/teachersubjectpage.component';
import { StudentSubjectPageComponent } from '../student-subject-page/student-subject-page.component';
import { UploadFilePageComponent } from '../upload-file-page/upload-file-page.component';

export const routes: Routes = [
    {
        path:'',
        component : LoginComponent

    },{
        path: 'mainpage',
        component: MainpageComponent
    },{
        path: 'teacherSubject',
        component: TeachersubjectpageComponent
    }
    ,{
        path: 'studentSubject',
        component: StudentSubjectPageComponent
    },
    {
        path: 'upload',
        component: UploadFilePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule{ }