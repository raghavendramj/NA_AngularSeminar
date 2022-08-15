import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message: string = 'From Interpolation :- I am from home component!';
  myEmail: string = 'keshav@gmail.com';
  bolderText: string = 'makeItBold';
  isDisabled: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  enableUsername(){
    this.isDisabled = !this.isDisabled;
  }
}
