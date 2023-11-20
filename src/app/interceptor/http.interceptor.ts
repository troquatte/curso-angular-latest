import {
  HttpErrorResponse,
  HttpHeaders,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, retry, shareReplay, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('x-vida-full-stack', 'dev');
  const reqClone = req.clone({ headers });

  return next(reqClone).pipe(
    shareReplay(),
    retry({ count: 2, delay: 1000 }),
    catchError((error: HttpErrorResponse) => {
      return throwError(() => error);
    })
  );
};
