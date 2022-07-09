import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneMillion';
  clicks = 1000000;

  onClick() {
    this.clicks--;
    if (this.clicks == 0) {
      this.win();
    }
  }

  win() {
    let box = document.getElementById('box');
    box.classList.remove('bg-box')
    box.innerHTML = '<div class="winBox">You win</div>';
    document.body.classList.add('winAnimation')
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
