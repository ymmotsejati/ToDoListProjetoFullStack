import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Pega o token de autenticação do localStorage.
  const authToken = localStorage.getItem('authToken');

  // Verifica se o token existe.
  if (authToken) {
    // Se o token existe, clona a requisição original
    const clonedRequest = req.clone({
      //e adiciona o cabeçalho de autorização.
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    // Envia a requisição clonada com o token para o próximo passo
    return next(clonedRequest);
  }

  // Se não houver token, apenas envia a requisição original sem modificá-la
  return next(req);
};