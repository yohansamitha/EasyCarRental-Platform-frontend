import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vehicle-fleet-page',
  templateUrl: './vehicle-fleet-page.component.html',
  styleUrls: ['./vehicle-fleet-page.component.scss']
})
export class VehicleFleetPageComponent implements OnInit {

  vehicles = [
    {
      vehicle_number: "aaa-0001",
      brand: "Toyota",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "4",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      PriceForExtraKM: "250",
      color: "red",
    },
    {
      vehicle_number: "aaa-0002",
      brand: "Toyota",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "4",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      PriceForExtraKM: "250",
      color: "red",
    },
    {
      vehicle_number: "aaa-0003",
      brand: "Toyota",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "4",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      PriceForExtraKM: "250",
      color: "red",
    },
    {
      vehicle_number: "aaa-0004",
      brand: "Toyota",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "4",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      PriceForExtraKM: "250",
      color: "red",
    },
    {
      vehicle_number: "aaa-0005",
      brand: "Toyota",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "4",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      PriceForExtraKM: "250",
      color: "red",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
