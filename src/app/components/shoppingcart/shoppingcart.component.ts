import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/order.model';
import { OrdersserviceService } from 'src/app/services/ordersservice.service';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  small:string="small";
  medium:string="meduim";
  large:string="small";
  order!:Order;
  sugar:number=1;
  quantity:number=1;
  size:string="small";
  orders:Order[]=[];
  items:any;
  uid:any;
  item: any;

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private service:OrdersserviceService){ }
  ngOnInit() {
    console.log(localStorage.getItem("orders"));

    this.uid=this.activatedRoute.snapshot.paramMap.get("id");
    let headers=new HttpHeaders();
    console.log(localStorage.getItem("token"));
    headers=headers.set(
      'Authorization',"Bearer "+localStorage.getItem("token")
    )
    this.http.get("https://bm-coffee-shop-api.herokuapp.com/api/v1/product/"+this.uid,{
      headers
    }).subscribe(
      (data:any)=>{
        console.log(data);
        this.item=data;
      }
    )
    // localStorage.setItem("orders","");
  }
  addtocart(){
      let order2:Order={
      size:this.size,
      itemname:this.item.name,
      itemprice:this.item.price,
      imagesrc:this.item.image,
      quantity:this.quantity,
      sugar:this.sugar,
      price:this.quantity*this.item.price
    }
    this.orders.push(order2);
    this.service.overAllPrice+=order2.price;
    this.service.addOrder(order2);
    localStorage.setItem("orders",JSON.stringify(this.orders));
  }
  icreasequantity(){
    this.quantity++;
  }
  decreasequantity(){
    if(this.quantity!=1){
      this.quantity--;
    }
  }

}
