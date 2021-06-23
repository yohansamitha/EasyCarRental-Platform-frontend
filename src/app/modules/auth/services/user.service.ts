import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import CustomerDTO from "../dto/CustomerDTO";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public register(dto: CustomerDTO): Observable<any> {
    return this.http.post(this.baseURL + '/customer', {
      customerNIC: dto.customerNIC,
      user_Id: dto.user_Id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      address: dto.address,
      contact: dto.contact,
      email: dto.email,
      licenceNumber: dto.licenceNumber,
      licenseImagePath: dto.licenseImagePath,
      nicImagePath: dto.nicImagePath,
      user: {
        user_Id: dto.user.user_Id,
        email: dto.user.email,
        password: dto.user.password,
        post: dto.user.post
      },
      booking: []
    });
  }

  login(email: string, password: string) {
    return this.http.get(this.baseURL + '/user', {
      headers: {email, password}
    })

  }
}
