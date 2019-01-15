import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted');
    const intercepted = request.clone({setHeaders: {
      ['Authorization']:'Token 09b7b409-eff2-4725-be48-684e8941a1b4',
      ['Content-Type']:'application/json'}
                                      });
    return next.handle(intercepted);
  }
}