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
      description: "loremaiwubefi uawbefiuweb fuiwaebfiu webfuiw ebfuibweu ",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "7",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      priceForExtraKM: "250",
      color: "red",
    },
    {
      vehicle_number: "aaa-0002",
      brand: "BMW",
      description: "loremaiwubefi uawbefiuweb fuiwaebfiu webfuiw ebfuibweu ",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "4",
      transmissionType: "Auto",
      dailyRate: "5000",
      dailyFreeMileage: "60KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      priceForExtraKM: "250",
      color: "blue",
    },
    {
      vehicle_number: "aaa-0003",
      brand: "Holden",
      description: "loremaiwubefi uawbefiuweb fuiwaebfiu webfuiw ebfuibweu ",
      frontView: "front image",
      backView: "back image",
      rightSideView: "right side view",
      leftSideView: "left side view",
      interior: "leather",
      numberOfPassengers: "7",
      transmissionType: "manual",
      dailyRate: "5000",
      dailyFreeMileage: "100KM",
      monthlyRate: "50000",
      monthlyFreeMileage: "1200",
      priceForExtraKM: "250",
      color: "green",
    },
    {
      vehicle_number: "aaa-0004",
      brand: "Honda",
      description: "loremaiwubefi uawbefiuweb fuiwaebfiu webfuiw ebfuibweu ",
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
      priceForExtraKM: "250",
      color: "yellow",
    },
    {
      vehicle_number: "aaa-0005",
      brand: "Ford",
      description: "loremaiwubefi uawbefiuweb fuiwaebfiu webfuiw ebfuibweu ",
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
      priceForExtraKM: "250",
      color: "violet",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
