import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeChangeComponent } from './employee/employee-change/employee-change.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderChangeComponent } from './order/order-change/order-change.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderLinesComponent } from './order/order-lines/order-lines.component';
// import { E404Component } from './misc/e404/e404.component';

const routes: Routes = [

  { path: "", redirectTo: "/employee/list", pathMatch: "full"},

  { path: "employee/list", component: EmployeeListComponent },
  { path: "employee/create", component: EmployeeCreateComponent },
  { path: "employee/detail/:id", component: EmployeeDetailComponent },
  { path: "employee/change/:id", component: EmployeeChangeComponent },
  { path: "employee/login", component: EmployeeLoginComponent },

  { path: "order/list", component: OrderListComponent },
  { path: "order/detail/:id", component: OrderDetailComponent },
  { path: "order/change/:id", component: OrderChangeComponent },
  { path: "order/create", component: OrderCreateComponent },
  { path: "order/lines/:id", component: OrderLinesComponent }

  // ,{ path: "**", component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
