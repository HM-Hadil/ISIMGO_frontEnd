import { HttpInterceptorFn } from '@angular/common/http';
//ng generate interceptor custom

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const tokenchat=localStorage.getItem('tokenChat');
  const cloneRequest= req.clone({
    setHeaders:{
      Authorization:`Bearer ${tokenchat}`
    }
  });
  return next(cloneRequest);
};
