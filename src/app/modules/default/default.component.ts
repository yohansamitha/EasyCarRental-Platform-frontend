import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  userState: string = this.getToken();

  constructor(private _router: Router, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  handleLogOut() {
    this.cookieService.remove('userToken');
    alert("Logging out successfully");
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/default']).then(r => {
      console.log('successfully route to sign in');
    });
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
    this._router.navigate(['/auth/login/access']).then(r => {
      console.log('successfully route to sign in');
    });
  }

  private getToken(): string {
    const userToken: any = this.cookieService.getObject('userToken');
    if (userToken === undefined) {
      console.log("user not logged in")
      return "empty";
    } else {
      console.log(typeof userToken);
      console.log(userToken);
      return userToken.firstName + " " + userToken.lastName;
    }
  }
}
