import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchoolComponent } from './components/school/school.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{
  path:'dashboard',
  component:DashboardComponent
},
{
  path:'school',
  component:SchoolComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
