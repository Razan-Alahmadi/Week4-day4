import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // First API call
    console.log("Fetching data the first time...");
    this.apiService.getData('https://api.escuelajs.co/api/v1/users').subscribe((data) => {
      this.products = data;
      console.log("First response received:", data);
    });

    // Second API call (to test cache )
    setTimeout(() => {
      console.log("Fetching data the second time...");
      this.apiService.getData('https://api.escuelajs.co/api/v1/users').subscribe((data) => {
        console.log("Second response received (should be cached):", data);
      });
    }, 3000); 
  }
}
