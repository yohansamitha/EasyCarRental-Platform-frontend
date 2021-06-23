import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-rent-vehicle',
  templateUrl: './rent-vehicle.component.html',
  styleUrls: ['./rent-vehicle.component.scss']
})
export class RentVehicleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RentVehicleComponent>, @Inject(MAT_DIALOG_DATA) public data: { vehicle: any }) {
    console.log(data.vehicle);
  }

  ngOnInit(): void {
  }

  modelOnClose() {
    this.dialogRef.close('Pizza!');
  }
}
