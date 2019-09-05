import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../users/user";

@Injectable({
  providedIn: "root"
})
export class GeometryService {
  constructor(private _http: HttpClient) {}

  endpoint: string = "http://jsonplaceholder.typicode.com/users";
  errorData = {};

  getUsers(): Observable<User[]> {
    return this._http
      .get<User[]>(this.endpoint)
      .pipe(catchError(this.handleError));
  }

  getUserByid(id: number): Observable<User> {
    return this._http
      .get<User>(`${this.endpoint}/${id}`)
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
