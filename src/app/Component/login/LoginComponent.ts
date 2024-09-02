import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  private http = inject(HttpClient);
  private router = inject(Router);

  onLogin() {
    console.log('Login button clicked');
    debugger;
    this.http
      .post('http://localhost:5298/api/Account/login', this.loginObj)
      .subscribe((res: any) => {
        console.log('API response:', res);
        if (res.result) {
          console.log('Login successful, navigating to /db');

          // localStorage.setItem('token', res.token);

          this.router.navigate(['/db']); 
          
          alert('Login successful');
        } else {
          console.log('Login failed:', res.message);
          this.router.navigate(['/db']); 
          console.log(res.token);
          
          localStorage.setItem('token' , res.token)
          alert(res.message);
        }
      });
  }

  navigator() {}
}
