import { Component } from '@angular/core';
import { ApiService } from '../services/api';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private api: ApiService, private router: Router) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: 'USER'
    };

    this.api.register(user).subscribe({
      next: () => {
        alert('Registered successfully');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Error registering user');
      }
    });
  }
}