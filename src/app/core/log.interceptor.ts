import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    let start = new Date().getTime();
    console.log('URL appelé : ', req.url)
    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          console.log("Temps écoulé de la requête (en ms):")
          console.log(new Date().getTime() - start)
          console.log('Réponse:', response.body);
        }
        }))
  }
}
