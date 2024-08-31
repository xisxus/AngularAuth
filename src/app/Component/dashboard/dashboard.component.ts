import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {


  http = inject(HttpClient)

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getUser(){
    this.http.get("").subscribe((res : any)=>{
      
    })
  }

}
