import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token');
  const router = new Router();
  if (!token) {
    return router.navigate(['forbidden']).then(() => false);
  }
  return true;
};
