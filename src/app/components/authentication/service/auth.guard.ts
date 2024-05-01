import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
/** ng g guard auth
? Which type of guard would you like to create? CanActivate */
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);// = constructor(private route:Router){}


  const localdata =localStorage.getItem('tokenChat');
  debugger;

  if(localdata!=null){
    return true;
  }
  else{
    router.navigate(['/login'])

    return false;

  }
};
