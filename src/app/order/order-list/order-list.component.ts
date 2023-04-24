import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders: Order[] = [];
  pageTitle = "Order List";

  constructor(
    private ordSvc: OrderService
  ){}

  ngOnInit(): void {
    this.ordSvc.list().subscribe({
      next: (res) => {
        console.debug("Order", res);
        this.orders = res;
      },
      error: (err) => {
        console.error(err);
      }  
      
    });
  }

}
