
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order.model';
import { OrdersserviceService } from 'src/app/services/ordersservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  orders:Order[]=[];
  checkoutPrice:number=0;
  toastisvisible:boolean=false;
  isnotvisible:boolean=true;
  constructor(private orderService:OrdersserviceService) { }

  ngOnInit(): void {
    this.orders=JSON.parse(localStorage.getItem("globalorders")||"");
    this.orders=this.orderService.orderslist;
    this.checkoutPrice=this.orderService.overAllPrice;
    // this.orders=JSON.parse(localStorage.getItem("orders")||"");
    console.log(this.orders);

  }
  clear(){
    this.isnotvisible=false;
    localStorage.setItem("orders","");
    this.orderService.orderslist=[];
    this.orderService.overAllPrice=0;
    this.checkoutPrice=0;
    // window.location.reload();
    // this.ngOnInit()
  }

}
