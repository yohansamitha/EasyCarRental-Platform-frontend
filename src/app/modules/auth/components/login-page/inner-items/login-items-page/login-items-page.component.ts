import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {CookieService} from "ngx-cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-items-page',
  templateUrl: './login-items-page.component.html',
  styleUrls: ['./login-items-page.component.scss']
})
export class LoginItemsPageComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  })

  constructor(private router: Router, private cookieService: CookieService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(
      this.loginForm.get('email')?.value.toString().trim(),
      this.loginForm.get('password')?.value.toString().trim()
    ).subscribe((response: any) => {
      console.log(response)
      console.log(typeof response)
      const tomorrow = new Date(new Date());
      tomorrow.setDate(tomorrow.getDate() + 1);
      const cookieOption = {
        expires: tomorrow
      }
      this.cookieService.put('userToken', response.data, cookieOption);
      alert(response.message);
      this.router.navigate(['/default']).then(r => {
          console.log("navigate to default")
        }
      );
    }, error => {
      if (error.status === 500) {
        alert("Something went wrong, Please check your user credentials and try again")
        console.log("500 ", error)
      } else if (error.status === 400) {
        alert("Something went wrong, Please try again")
        console.log("400 ", error);
      } else {
        console.log(error);
      }
    })

  }
}
