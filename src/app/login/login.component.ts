import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  logger() {
    let formData = {
      email: this.email,
      password: this.password,
    };
    this.http
      .post('http://localhost:5000/api/users/login', formData)
      .subscribe((data: any) => {
        try {
          localStorage.setItem('formData', JSON.stringify(data));
          alert('Student Login Successfully');
          this.router.navigateByUrl('home');
        } catch (error) {
          console.log(error);
        }
      });
  }
  login() {
    this.logger();
  }
}
