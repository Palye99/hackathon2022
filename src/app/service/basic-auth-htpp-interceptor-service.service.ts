import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      const auth = sessionStorage.getItem('token');
      console.log('UPDATE HEADERS', typeof auth);
      console.log(auth);
      console.log('---');
      req = req.clone({
        // tslint:disable-next-line:no-non-null-assertion
        headers: req.headers.set('Authorization', auth!.toString()),
        // setHeaders: {
        //   Authorization: sessionStorage.getItem('basicauth')
        // }
      });
    }

    console.log('REQ SENT', req);

    return next.handle(req);

  }
}
