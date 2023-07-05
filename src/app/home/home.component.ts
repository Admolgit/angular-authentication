import { Component } from '@angular/core';
import { isAuthenticated } from '../utils/isAuthenticated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  name = '';

  ngOnInit() {
    const {token, user } = isAuthenticated();
    console.log(user, token)
    this.name = user.name
  }

  count = setInterval(() => {
    let futureDate = new Date('June 30, 2023 22:52:40').getTime();
    const currentDate = new Date().getTime();
    const diffInTime = +futureDate - +currentDate;
    this.days = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (diffInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.minutes = Math.floor((diffInTime % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diffInTime % (1000 * 60)) / 1000);

    if (diffInTime < 0) {
      clearInterval(this.count);
      const offerExpired = document.querySelector('.count-down') as any;
      offerExpired.innerHTML = 'Offer expired';
    }
  }, 1000);
}
