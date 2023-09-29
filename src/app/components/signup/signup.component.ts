import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  xform!: FormGroup;

  constructor(private http:HttpClient,private router:Router) { }
  // username:any="";
  ngOnInit(): void {
    this.xform = new FormGroup({
      'username' : new FormControl('', Validators.required),
      'email': new FormControl ('',  [Validators.required , Validators.email]),
      'password': new FormControl ('' , [Validators.required,Validators.minLength(8),Validators.maxLength(32)]),
      'cpassword': new FormControl ('' , [Validators.required])
    },[MustMatch("password","cpassword")]
    )

  }


  clickbtn(){
    // console.log(this.xform);

    let body={
      userName:this.username.value,
      password:this.password.value,
      email:this.email.value
    };
    console.log(this.xform.value);

    this.http.post("https://bm-coffee-shop-api.herokuapp.com/api/v1/user/signup",body).subscribe((res:any)=>{
    // localStorage.setItem("username",res.userName);
    this.router.navigate(["/login"]);
    this.xform.reset();
    })
  }


  get username(){
    return this.xform.get('username') as FormControl;
  }

  get email(){
    return this.xform.get('email') as FormControl;
  }

  get password(){
    return this.xform.get('password') as FormControl;
  }

  get cpassword(){
    return this.xform.get('cpassword') as FormControl;
  }









}
export function MustMatch(controlName: string, matchingControlName: string):ValidatorFn {
  return  (formGroup: AbstractControl):ValidationErrors|null => {
  const control = formGroup.get(controlName);
  const matchingControl =formGroup.get(matchingControlName);
  if (matchingControl?.errors && !matchingControl?.errors['mustMatch']) {
  return null;
  }
  if (control?.value !== matchingControl?.value) {
    return { mustMatch: true }
  } else
  {
  return null;
  }
}
}

