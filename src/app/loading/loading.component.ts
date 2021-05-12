import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input()
  message = 'no message...'; // creeert een html attribute binnen de selector

  @Output()
  iAmClicked = new EventEmitter(); // creeert een html event

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.message = 'loaded!';
    }, 2000);
  }


  handle(): void {
    this.iAmClicked.emit('thank you!');
  }
}
