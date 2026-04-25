import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css' 
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private api: ApiService, private router: Router) {}

  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.api.login(data).subscribe({
      next: () => {
        alert('Login successful');
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Invalid credentials');
      }
    });
  }
}