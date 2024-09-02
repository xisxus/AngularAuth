import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  userList : any[] =[]

  http = inject(HttpClient)

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    debugger
    this.http.get("http://localhost:5298/api/Employees").subscribe((res : any)=>{
      this.userList = res
    })
  }

}
