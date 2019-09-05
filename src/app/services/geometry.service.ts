import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GeoLocation } from '../geolocation/geolocation';


@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  constructor(private _http: HttpClient) { }

  endpoint: string = "http://www.datasciencetoolkit.org/maps/api/";
  errorData = {};

  getLocation(state_name: string): Observable<GeoLocation> {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin: *', 'application/json');

    return this._http.get<GeoLocation>(`${this.endpoint}geocode/json?sensor=false&address=${state_name}`, { headers: header }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
