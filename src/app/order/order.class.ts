import { Customer } from "../customer/customer.class";

export class Order {
    id: number = 0;
    date: string = "";
    description: string = "";
    total: number = 0;
    status: string = "NEW";
    
    customerId: number = 0;
    customer: Customer | null = null;
    customerName!: string;
}