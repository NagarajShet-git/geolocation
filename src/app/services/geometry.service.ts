import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Geometry } from "../geo-search/geometry";

@Injectable({
  providedIn: "root"
})
export class GeometryService {
  constructor(private _http: HttpClient) {}

  errorData = {};

  getLocation(state_name: string): Observable<Geometry> {
    return this._http
      .get<Geometry>(
        `http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=${state_name}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    this.errorData = {
      errorTitle: "Oops! Request for document failed",
      errorDesc: "Something bad happened. Please try again later."
    };
    return throwError(this.errorData);
  }
}
