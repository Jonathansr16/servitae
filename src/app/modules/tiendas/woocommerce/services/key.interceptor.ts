import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}
)
export class KeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const params = new HttpParams()
    .set('consumer_key', environment.wcommerce.client_key)
    .set('consumer_secret', environment.wcommerce.secret_key);
    

    const reqClone = request.clone({
      params: params
    });

    return next.handle(reqClone).pipe(
      // catchError(this.errorHandle)
    )
  }

  // errorHandle(error: HttpErrorResponse) {
  //   console.log('Sucedio un error');
  //   console.log('Registrado en el log file');
  //   console.warn(error);
  //   return throwError('Error Inesperado')
  // }
}
