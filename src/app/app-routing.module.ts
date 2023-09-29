import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginguardGuard } from './services/loginguard.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'mycart',component:MycartComponent},
  {path:'menu',component:MenuComponent,canActivate:[LoginguardGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[LoginguardGuard]},
  {path:'cart/:id',component:ShoppingcartComponent,canActivate:[LoginguardGuard]},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',redirectTo:"home"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
