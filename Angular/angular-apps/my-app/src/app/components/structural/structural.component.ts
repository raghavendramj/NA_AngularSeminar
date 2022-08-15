import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  people: Person[] = [];

  constructor() {}

  ngOnInit(): void {}

  loadData() {
    this.people = [
      {
        name: 'Kevin',
        country: 'England',
        email: 'kevin@gmail.com',
      },
      {
        name: 'Patty',
        country: 'Australia',
        email: 'patty@gmail.com',
      },
      {
        name: 'Ricky',
        country: 'South Africa',
        email: 'ricky@gmail.com',
      },
      {
        name: 'Kapil',
        country: 'India',
        email: 'kapil@gmail.com',
      },
    ];
  }
}

export interface Person {
  name: string;
  country: string;
  email: string;
}
