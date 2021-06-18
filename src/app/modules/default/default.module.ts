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


@NgModule({
  declarations: [
    DefaultComponent,
    HomePageComponent,
    AboutUsPageComponent,
    VehicleFleetPageComponent,
    VehicleDetailComponent,
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DefaultModule {
}
