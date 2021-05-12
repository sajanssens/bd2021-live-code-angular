import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  // fields
  title;
  toggle = false;
  input = 'input text here...';
  cars;

  // methods
  ngOnInit(): void {
    this.title = 'bd2021-live-code-angular';
    this.cars = [
      {make: 'Opel', type: 'Astra', price: 29995},
      {make: 'Porsche', type: '911', price: 145000},
      {make: 'Fiat', type: 'Uno', price: 1800}
    ];
  }

  handleClick(): void {
    this.title = this.toggle ? 'clicked!' : 'yo..';
    this.toggle = !this.toggle;
  }

}
