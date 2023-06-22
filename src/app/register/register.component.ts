import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  register() {
    let formData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.http
      .post('http://localhost:5000/api/users/signup', formData)
      .subscribe((data: any) => {
        try {
          console.log(data);
          alert('Student Registered Successfully');
          this.router.navigateByUrl('login');
        } catch (error) {
          console.log(error);
        }
      });
  }
  save() {
    this.register();
  }
}
