import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
// import { GlobalstateService } from './services/globalstate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router:Router){
    this._router.events.subscribe(e=>{
      if(e instanceof NavigationStart){

      }
    })
  }
  title = 'gp';
}
