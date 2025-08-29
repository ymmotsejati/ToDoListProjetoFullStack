import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Injetamos o Router para poder redirecionar o usuário
  const router = inject(Router);

  // Verificamos se o token de autenticação existe no localStorage
  const token = localStorage.getItem('authToken');

  if (token) {
    // Se o token existe, o usuário está autenticado. Permita o acesso.
    return true;
  } else {
    // Se não há token, o usuário não está autenticado.
    // Redirecione para a página de login.
    router.navigate(['/login']);
    // Bloqueie o acesso à rota original.
    return false;
  }
};