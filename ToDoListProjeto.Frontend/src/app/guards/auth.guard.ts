import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Injeta o Router para poder fazer o redirecionamento
  const router = inject(Router);

  // Procura pelo token no localStorage
  const token = localStorage.getItem('authToken');

  if (token) {
    return true;
  } else {
    // Se não houver token, redireciona para a página de login
    router.navigate(['/login']);
    // E bloqueia o acesso à rota que estava tentando acessar
    return false;
  }
};