import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeChangeComponent } from './employee/employee-change/employee-change.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';

const routes: Routes = [

  { path: "", redirectTo: "/employee/list", pathMatch: "full"},
  { path: "employee/list", component: EmployeeListComponent },
  { path: "employee/create", component: EmployeeCreateComponent },
  { path: "employee/detail/:id", component: EmployeeDetailComponent },
  { path: "employee/change/:id", component: EmployeeChangeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
