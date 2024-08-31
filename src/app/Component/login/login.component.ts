import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    "email": "",
    "password": ""
  }

  private http = inject(HttpClient);
  private router = inject(Router);

  onLogin() {
    console.log('clickes');
    
    this.http.post('http://localhost:5298/api/Account/login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        debugger;
        //this.router.navigateByUrl('db')
        alert('login success');
        setTimeout(() => {
          this.router.navigateByUrl('db');
        }, 100);
      } else {
        alert(res.message);
      }
    });
  }
}
