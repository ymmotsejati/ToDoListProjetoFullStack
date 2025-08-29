import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginRequest } from '../models/login-request.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: LoginRequest = { email: '', password: '' };
  errorMessage = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido', response);
      localStorage.setItem('authToken', response.token);
      console.log('Token salvo! Redirecionando...');
      this.router.navigate(['/tasks']); 
      },
      error: (error) => {
        console.error('Erro no login', error);
        this.errorMessage = 'Erro no login';
      }
    });
  }
}