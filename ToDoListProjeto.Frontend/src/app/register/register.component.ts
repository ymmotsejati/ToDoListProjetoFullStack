import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterRequest } from '../models/register-request.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true, //  Componente Standalone
  imports: [
    FormsModule,
    RouterLink,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ], 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData: RegisterRequest = { name: '', email: '', password: '' };
  errorMessage = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  register(): void {
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registro bem-sucedido!', response);
        this.router.navigate(['/login']); // Redirecionar para o login
      },
      error: (error) => {
        console.error('Erro no registro:', error);
        if (error.status === 409 || error.status === 400) {
          this.errorMessage = 'Este e-mail já está cadastrado. Por favor, use outro e-mail.';
        } else {
          this.errorMessage = 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.';
        }
      }
    });
  }
}