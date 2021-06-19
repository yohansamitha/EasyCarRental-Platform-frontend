import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import UserDTO from "../../../../dto/UserDTO";
import CustomerDTO from "../../../../dto/CustomerDTO";

@Component({
  selector: 'app-sign-up-items-page',
  templateUrl: './sign-up-items-page.component.html',
  styleUrls: ['./sign-up-items-page.component.scss']
})
export class SignUpItemsPageComponent implements OnInit {

  signUpForm = new FormGroup({
    fName: new FormControl('', [Validators.minLength(3), Validators.required]),
    lName: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  })

  loading = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.loading = true;
    const date = new Date();
    const time = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds()

    const dto = new CustomerDTO(
      'C0001',
      'U001',
      this.signUpForm.get('fName')?.value.toString().trim(),
      this.signUpForm.get('lName')?.value.toString().trim(),
      'user address',
      'user contact',
      this.signUpForm.get('email')?.value.toString().trim(),
      'licence Number',
      'nic image path',
      'licence image path',
      new UserDTO(
        'U001',
        this.signUpForm.get('email')?.value.toString().trim(),
        this.signUpForm.get('password')?.value.toString().trim(),
        'customer'
      )
    );

    this.userService.register(dto).subscribe(response => {
      this.loading = false;
      console.log(response);
    }, error => {
      this.loading = false;
      console.log(error);
    })

  }

  getNicImage($event: Event) {

  }
}
