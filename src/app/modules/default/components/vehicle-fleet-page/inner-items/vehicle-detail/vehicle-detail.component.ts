import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RentVehicleComponent} from "./inner-items/rent-vehicle/rent-vehicle.component";

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  @Input() user: any

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.user.brand)
    console.log(this.user)
  }


  rentThisCar() {
    console.log(this.user.vehicle_number);
    let matDialogRef = this.dialog.open(RentVehicleComponent, {
      data: {vehicle: this.user}
    });
  }


}
