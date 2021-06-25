import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {
  baseURL = environment.baseUrl;

  constructor(private http: HttpClient,) {
  }

  public getAllProducts(pagination: number, page: number): Observable<any> {
    return this.http.get(this.baseURL + '/vehicle?' + 'pagination=' + pagination + '&page=' + page)
  }
}
