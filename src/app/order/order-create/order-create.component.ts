import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { Router, RouterConfigOptions } from '@angular/router';
import { Customer } from 'src/app/customer/customer.class';
import { CustomerService } from 'src/app/customer/customer.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent {

  order: Order = new Order();
  customers!: Customer[];
  pageTitle = "Order Create";

  constructor(
    private ordSvc: OrderService,
    private custSvc: CustomerService,
    private router: Router
  ){}

  save(): void{
    this.order.customerId = Number(this.order.customerId);
    this.ordSvc.create(this.order).subscribe({
      next: (res) =>{
        console.debug("Order createdddd!");
        this.router.navigateByUrl("/order/list")  ;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(){

    this.custSvc.list().subscribe({
      next: (res) => {
        console.debug("Customerzzzzz:", res);
        this.customers = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  

}
