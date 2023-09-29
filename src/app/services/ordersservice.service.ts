import { Injectable } from '@angular/core';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersserviceService {
  orderslist:Order[]=[];
  overAllPrice:number=0;
  addOrder(order:Order){
    this.orderslist.push(order);
    localStorage.setItem("globalorders",JSON.stringify(this.orderslist));
  }
  getOrders(){
    return JSON.parse(localStorage.getItem("globalorders")||"");
  }
  constructor() { }
}
