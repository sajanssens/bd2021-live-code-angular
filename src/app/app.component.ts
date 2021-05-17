import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  loadingMessage = 'loading...';


  handleLoadingIsClicked(someOutput: string): void {
    console.log(someOutput);
    this.loadingMessage = someOutput;
  }
}
