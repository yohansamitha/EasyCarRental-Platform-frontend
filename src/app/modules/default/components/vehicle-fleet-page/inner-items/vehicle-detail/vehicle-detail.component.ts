import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  @Input() user: any

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.user.brand)
    console.log(this.user)
  }

}
