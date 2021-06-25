import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DefaultRoutingModule} from './default-routing.module';
import {DefaultComponent} from './default.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutUsPageComponent} from './components/about-us-page/about-us-page.component';
import {VehicleFleetPageComponent} from './components/vehicle-fleet-page/vehicle-fleet-page.component';
import {VehicleDetailComponent} from './components/vehicle-fleet-page/inner-items/vehicle-detail/vehicle-detail.component';
import {MatCardModule} from '@angular/material/card';
import {RentVehicleComponent} from './components/vehicle-fleet-page/inner-items/vehicle-detail/inner-items/rent-vehicle/rent-vehicle.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CookieModule} from "ngx-cookie";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    DefaultComponent,
    HomePageComponent,
    AboutUsPageComponent,
    VehicleFleetPageComponent,
    VehicleDetailComponent,
    RentVehicleComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    CookieModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DefaultModule {
}
