import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseurl: string = "http://localhost:5000/api/employees";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Employee[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Employee[]>;
  }
}
