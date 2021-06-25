import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import BookingDTO from "../dto/BookingDTO";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleRentService {

  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  placeBooking(bookingDTO: BookingDTO) {
    console.log("place booking method")
    return this.http.post(this.baseURL + '/booking', {
      bookingID: '',
      booking_date: bookingDTO.booking_date,
      departure_date: bookingDTO.departure_date,
      arrival_date: bookingDTO.arrival_date,
      booking_type: bookingDTO.booking_type,
      start_mileage: '',
      end_mileage: '',
      booking_status: bookingDTO.booking_status,
      customerNIC: {
        customerNIC: bookingDTO.customerNIC,
        user_Id: '',
        firstName: '',
        lastName: '',
        address: '',
        contact: '',
        email: '',
        licenceNumber: '',
        nicImagePath: '',
        licenseImagePath: ''
      },
      driverLicenseNumber: {
        driverLicenseNumber: '',
        user_Id: '',
        name: '',
        gmail: '',
        address: '',
        contact: '',
        salary: ''
      },
      vehicleNumber: {
        vehicleNumber: bookingDTO.vehicle_number,
        brand: '',
        description: '',
        frontView: '',
        backView: '',
        rightSideView: '',
        leftSideView: '',
        interior: '',
        numberOfPassengers: '',
        transmissionType: '',
        dailyRate: '',
        dailyFreeMileage: '',
        monthlyRate: '',
        monthlyFreeMileage: '',
        PriceForExtraKM: '',
        color: ''
      },

    });
  }
}
