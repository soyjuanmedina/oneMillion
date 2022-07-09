import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneMillion';
  clicks = 0;
  message;
  width = 300;
  height = 300;

  onClick() {
    this.clicks++;
    if (this.clicks > 1) {
      this.message = "Enhorabuena, ya has superado los 1 clicks"
      this.width = this.randomIntFromInterval(1, 500);
      this.height = this.randomIntFromInterval(1, 500);
    }
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
