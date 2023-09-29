















import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  exform!: FormGroup;

  constructor(private http:HttpClient,private router:Router,public loginService:LoginService) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'email':new FormControl ('',  [Validators.required , Validators.email]),
      'password': new FormControl('' , [Validators.required,Validators.minLength(8),Validators.maxLength(32)])
    })
  }

    clicksub(){
    let body={
      email:this.email.value,
      password:this.password.value
    };
    // console.log(this.exform.value);

    this.http.post("https://bm-coffee-shop-api.herokuapp.com/api/v1/user/login",body).subscribe((res:any)=>{
      // console.log(res);
      this.loginService.logging=true;
      localStorage.setItem("token",res.token)
      localStorage.setItem("username",res.userName);
      localStorage.setItem("email",res.email);
      this.exform.reset();

      this.router.navigate(["/menu"]);
    },
    (err)=>{
      console.log(err.error.message);

    }
    )

  }

  get email(){
    return this.exform.get('email') as FormControl;
  }

  get password(){
    return this.exform.get('password') as FormControl;
  }
}
