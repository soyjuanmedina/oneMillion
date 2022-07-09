import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneMillion';
  clicks = 1;

  onClick() {
    this.clicks--;
    if (this.clicks == 0) {
      let u = document.getElementById('box');
      u.classList.remove('bg-box')
      u.innerHTML = '<h1>You win</h1>';
      console.log('u', u);
    }
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
