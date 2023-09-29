import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  username=localStorage.getItem("username");
  email=localStorage.getItem("email");
  ngOnInit(): void {
  }

}
