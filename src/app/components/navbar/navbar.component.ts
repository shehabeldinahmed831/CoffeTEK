import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginservice:LoginService) { }
  loggedin:boolean=this.loginservice.logging;
  ngOnInit(): void {

    if(this.loginservice.logging){
      this.loginservice.logging=true;
      this.loggedin=true;
    }
    // else{
    //   this.loggedin=false;
    // }
  }
  removetoken(){
    localStorage.removeItem("token");
    this.loginservice.logging=false;
    this.loggedin=false;
    localStorage.clear();
    // location.reload();
  }

}
