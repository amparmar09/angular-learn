import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChildComponent } from './components/child/child.component';
import { TableComponent } from './components/table/table.component';
import { ParentComponent } from './components/parent/parent.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "child",
    component: ChildComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path:"parent",
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
