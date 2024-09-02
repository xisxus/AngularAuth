import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  regObj = {
    "id": "",
    "name": "",
    "email": "",
    "password": "",
    "confirmPassword": ""
  }

  http  = inject(HttpClient)
  router = inject(Router)

  onReg(){
    console.log('regClick');
    this.http.post('http://localhost:5298/api/Account/Register',  this.regObj).subscribe((res:any)=>{
      if (res.result) {
        alert('register success');
        
      }else{
        alert(res.message);
        this.router.navigate(['/login']);
      }
    })
    
  }
}
