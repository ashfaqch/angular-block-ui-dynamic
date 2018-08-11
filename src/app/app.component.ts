import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = false;
  visibleOnFullPage = false;
  message = 'Please wait...';


  showInContainer(): void {
    this.visible = true;

    setTimeout(() => {
      this.message = 'Please wait...';
    }, 1000);

    setTimeout(() => {
      this.message = 'Verifying user...';
    }, 2000);

    setTimeout(() => {
      this.message = 'Loading data...';
    }, 3000);

    setTimeout(() => {
      this.visible = false;
    }, 4000);
  }


  showInFullPage(): void {
    this.visibleOnFullPage = true;

    setTimeout(() => {
      this.message = 'Please wait...';
    }, 1000);

    setTimeout(() => {
      this.message = 'Verifying user...';
    }, 2000);

    setTimeout(() => {
      this.message = 'Loading data...';
    }, 3000);

    setTimeout(() => {
      this.visibleOnFullPage = false;
    }, 4000);
  }

}
