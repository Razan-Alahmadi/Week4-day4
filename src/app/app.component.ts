import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import {HomeComponent} from './home/home.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products:any;
constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData('https://fakestoreapi.com/products').subscribe((data) => {
      this.products = data;
    });
  }  
}

