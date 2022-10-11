import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  private apiKey = 'fdb18e80433a576b90bbd683a60dec10'
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.apiKey}`
      }
    })

    return next.handle(tokenizedRequest)
  }
}
