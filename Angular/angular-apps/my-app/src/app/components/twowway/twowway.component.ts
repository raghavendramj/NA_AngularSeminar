import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowway',
  templateUrl: './twowway.component.html',
  styleUrls: ['./twowway.component.css']
})
export class TwowwayComponent implements OnInit {

  constructor() { }
  public emailAddress: string = 'raghav@gmail.com';

  ngOnInit(): void {
  }

}
