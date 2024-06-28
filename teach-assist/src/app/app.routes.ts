import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    {
        path:'',
        component : LoginComponent

    },{
        path: 'mainpage',
        component: MainpageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesModule{ }