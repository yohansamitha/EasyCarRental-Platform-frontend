import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  searchCar() {
    console.log("testing search");
    alert("testing search")
  }

  navigate(route: string) {
    this._router.navigate(['/default/' + route]).then(r => {
      console.log('successfully route to ' + route);
    });
  }

  handleSignIN() {
    this._router.navigate(['/auth']).then(r => {
      console.log('successfully route to sign in');
    });
  }
}
