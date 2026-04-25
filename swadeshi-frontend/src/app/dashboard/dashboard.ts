import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  pickupLocation = '';
  dropLocation = '';
  goodsType = '';
  weight = 0;

  bookings: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadBookings(); // ✅ load on page open
  }

  createBooking() {

    // ✅ validation
    if (!this.pickupLocation || !this.dropLocation || !this.goodsType || this.weight <= 0) {
      alert("Please fill all fields correctly");
      return;
    }

    const data = {
      pickupLocation: this.pickupLocation,
      dropLocation: this.dropLocation,
      goodsType: this.goodsType,
      weight: this.weight
    };

    this.api.createBooking(data).subscribe({
      next: () => {
        alert("Booking created");

        // clear form
        this.pickupLocation = '';
        this.dropLocation = '';
        this.goodsType = '';
        this.weight = 0;

        this.loadBookings(); // ✅ reload list
      },
      error: (err) => {
        console.error(err);
        alert("Error creating booking");
      }
    });
  }

  loadBookings() {
    this.api.getBookings().subscribe({
      next: (res: any) => {
        this.bookings = [...res]; // ✅ FIX: forces UI update
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}