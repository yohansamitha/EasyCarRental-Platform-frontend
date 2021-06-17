import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './default.component';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {VehicleFleetPageComponent} from "./components/vehicle-fleet-page/vehicle-fleet-page.component";
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";

const routes: Routes = [
  {
    path: '', component: DefaultComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'aboutus', component: AboutUsPageComponent},
      {path: 'vehiclefleet', component: VehicleFleetPageComponent},
    ]
  }
  // ,  {path:'',component:}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule {
}
