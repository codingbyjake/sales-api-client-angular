import { Component } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {

  order!: Order;
  pageTitle = "Order Details";
  showVerifyRemove: boolean = false;

  constructor(
    private ordSvc: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  remove(): void{
    this.showVerifyRemove = !this.showVerifyRemove;
  }

  removeVerified(): void {
    this.ordSvc.remove(this.order.id).subscribe({
      next: (res) => {
        console.debug("Order Removed!!");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.ordSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Orders:", res);
        this.order = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
