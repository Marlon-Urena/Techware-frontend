import { Component, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  userName = new FormControl('');
  setPassword = new FormControl('');
  confirmPassword = new FormControl('');
  bday = new FormControl('');
  address = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  country = new FormControl('');
  zip = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
