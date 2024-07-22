import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchoolComponent } from './components/school/school.component';


const routes: Routes = [
{
  path:'',
  component:DashboardComponent
},
{
  path:'school',
  component:SchoolComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
