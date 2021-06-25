import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie";
import BookingDTO from "../../../../../../dto/BookingDTO";
import {VehicleRentService} from "../../../../../../services/vehicle-rent.service";

@Component({
  selector: 'app-rent-vehicle',
  templateUrl: './rent-vehicle.component.html',
  styleUrls: ['./rent-vehicle.component.scss']
})
export class RentVehicleComponent implements OnInit {

  private departure: string = 'notSelected';
  private arrival_date: string = 'notSelected';
  private bookingType: string = 'notSelected';

  constructor(public dialogRef: MatDialogRef<RentVehicleComponent>, @Inject(MAT_DIALOG_DATA) public data: { vehicle: any }, private cookieService: CookieService, private vehicleRentService: VehicleRentService) {
    console.log(data.vehicle);
  }

  ngOnInit(): void {
  }

  modelOnClose() {
    this.dialogRef.close();
  }

  rent() {
    console.log("===================================");
    const customerDetail: any = this.cookieService.getObject('userToken');

    // if (customerDetail === undefined) {
    //   alert('Only logged users can place rental. \n please Login or register')
    // } else {
    if (this.departure === 'notSelected' && this.departure.toString().trim().length >= 0) {
      alert('please select departure date!')
    } else if (this.arrival_date === 'notSelected' && this.arrival_date.toString().trim().length >= 0) {
      alert('please select arrival date!')
    } else if (this.bookingType === 'notSelected' && this.bookingType.toString().trim().length >= 0) {
      alert('please select daily booking or monthly booking!')
    } else {
      if (customerDetail === undefined) {
        console.log("user not logged in");
        alert('Only logged users can place rental. \n please Login or register');
      } else {
        let bookingDTO = new BookingDTO(
          customerDetail.customerNIC,
          this.data.vehicle.vehicleNumber,
          (new Date()).toLocaleDateString('en-US'),
          (new Date(this.departure)).toLocaleDateString('en-US'),
          (new Date(this.arrival_date)).toLocaleDateString('en-US'),
          this.bookingType,
          'PENDING'
        );

        this.vehicleRentService.placeBooking(bookingDTO).subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });

      }
    }
    // }

    console.log(this.departure);
    console.log(this.arrival_date);
    console.log(this.bookingType);
    console.log("===================================");
  }

  testing() {
    console.log("===================================");
    console.log(this.departure);
    console.log(this.arrival_date);
    console.log(this.bookingType);
    console.log((new Date(this.arrival_date)).toLocaleDateString('en-US'));
    console.log("===================================");
  }


  OnArrivalDateChange(value: string) {
    console.log(value);
    this.arrival_date = value;
  }

  OnDepartureDateChange(value: string) {
    console.log(value);
    this.departure = value;
  }

  OnRadioButtonChange(value: string) {
    console.log(value);
    this.bookingType = value;
  }
}
