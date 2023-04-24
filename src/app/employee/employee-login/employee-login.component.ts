import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  pateTitle = "Employee Login";
  email: string = "";
  password: string ="";
  message: string = "";

  constructor(
    private emplSvc: EmployeeService,
    private router: Router

  ){}

  login(): void{
    this.emplSvc.login(this.email, this. password).subscribe({
      next: (res) => {
        console.debug("Login SUccess!!");
        this.router.navigateByUrl("/employee/list");
      },
      error: (err) =>{
        console.error(err);
        this.message = "Login failed!!";
      }
    })
  }
  
  ngOnInit(): void{

  }

}
