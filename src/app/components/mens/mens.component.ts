import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
  isModal1Active: boolean = false;
  isModal2Active: boolean = false;
  isModal3Active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleModal1() {
    this.isModal1Active = !this.isModal1Active;
  }

  toggleModal2() {
    this.isModal2Active = !this.isModal2Active;
  }

  toggleModal3() {
    this.isModal3Active = !this.isModal3Active;
  }

}
