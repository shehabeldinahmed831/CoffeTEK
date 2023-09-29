import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private http:HttpClient){}
  cards:any[] =[];


  ngOnInit(): void {

    let headers=new HttpHeaders();
    console.log(localStorage.getItem("token"));

    headers=headers.set(
      'Authorization',"Bearer "+localStorage.getItem("token")
    )
    this.http.get("https://bm-coffee-shop-api.herokuapp.com/api/v1/product",{
      headers
    }).subscribe(
      (data:any)=>{
        console.log(data);
        this.cards=data;
        localStorage.setItem("items",JSON.stringify(data));
        console.log(localStorage.getItem("items"));
      }
    )
    // this.productService
    //   .getProductsFromCategory('Tutorial')
    //   .subscribe((prods: ProductModelServer[]) => {
    //     this.products = prods.products;
    //     console.log(this.products);
    //   });
  }
  opencart(card: any) {}
}
