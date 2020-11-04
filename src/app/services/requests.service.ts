import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { timeout, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  urlBase = 'http://localhost:5050/';
  timeOut = 30000;
  idUsuario = 1;

constructor(private http: HttpClient) { }

doGet(responseType, url, params?) {
  const httpHeaders = new HttpHeaders().set('Accept', 'application/json');
  const bodyRequest = {
    headers: httpHeaders,
    responseType: responseType
  };

  if (params) {
    bodyRequest['params'] = params;
  }

  return new Promise((resolve, reject) => {
    this.http
      .get(this.urlBase + url, bodyRequest)
      .pipe(
        timeout(this.timeOut),
        catchError(e => {
          return throwError('timeoutError');
        })
      )
      .toPromise()
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
}

doPut(url, body) {
  const httpHeaders = new HttpHeaders().set(
    'content-type',
    'application/json'
  );

  return new Promise((resolve, reject) => {
    this.http
      .put(this.urlBase + url, body, {
        headers: httpHeaders
      })
      .pipe(
        timeout(this.timeOut),
        catchError(e => {
          return throwError('timeoutError');
        })
      )
      .toPromise()
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
}

doPost(url, body) {
  const httpHeaders = new HttpHeaders().set(
    'content-type',
    'application/json'
  );

  return new Promise((resolve, reject) => {
    this.http
      .post(this.urlBase + url, body, {
        headers: httpHeaders
      })
      .pipe(
        timeout(this.timeOut),
        catchError(e => {
          return throwError('timeoutError');
        })
      )
      .toPromise()
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
}

doDelete(url, params) {
  const httpHeaders = new HttpHeaders().set(
    'content-type',
    'application/json'
  );

  return this.http.delete(this.urlBase + url, {
    params: params,
    headers: httpHeaders,
    responseType: 'json'
  });
}

}
