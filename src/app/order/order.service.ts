import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseurl: string = "http://localhost:5000/api/orders";

  constructor(
    private http: HttpClient
  ) {}

  list(): Observable<Order[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Order[]>;
  }

  get(id: number): Observable<Order>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Order>;
  }

  create(empl: Order): Observable<Order>{
    return this.http.post(`${this.baseurl}`, empl) as Observable<Order>;
  }
  change(empl: Order): Observable<any>{
    return this.http.put(`${this.baseurl}/${empl.id}`, empl) as Observable<any>;
  }
  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
