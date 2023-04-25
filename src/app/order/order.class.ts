import { Customer } from "../customer/customer.class";
import { Orderline } from "../orderline/orderline.class";

export class Order {
    id: number = 0;
    date: string = "";
    description: string = "";
    total: number = 0;
    status: string = "NEW";
    orderLines!: Orderline[];
    
    customerId: number = 0;
    customer: Customer | null = null;
    customerName!: string;
}