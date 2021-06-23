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
    customerNIC: new FormControl('', [Validators.minLength(3), Validators.required]),
    fName: new FormControl('', [Validators.minLength(3), Validators.required]),
    lName: new FormControl('', [Validators.minLength(3), Validators.required]),
    address: new FormControl('', [Validators.minLength(3), Validators.required]),
    contact: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    licenceNumber: new FormControl('', [Validators.minLength(5), Validators.required]),
    nicImagePath: new FormControl('', [Validators.required]),
    licenseImagePath: new FormControl('', [Validators.required]),
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

    const dto = new CustomerDTO(
      this.signUpForm.get('customerNIC')?.value.toString().trim(),
      'C' + this.signUpForm.get('customerNIC')?.value.toString().trim(),
      this.signUpForm.get('fName')?.value.toString().trim(),
      this.signUpForm.get('lName')?.value.toString().trim(),
      this.signUpForm.get('address')?.value.toString().trim(),
      this.signUpForm.get('contact')?.value.toString().trim(),
      this.signUpForm.get('email')?.value.toString().trim(),
      this.signUpForm.get('licenceNumber')?.value.toString().trim(),
      'nic image path',
      'licence image path',
      new UserDTO(
        'C' + this.signUpForm.get('customerNIC')?.value.toString().trim(),
        this.signUpForm.get('email')?.value.toString().trim(),
        this.signUpForm.get('password')?.value.toString().trim(),
        'customer'
      )
    );

    this.userService.register(dto).subscribe(response => {
      this.loading = false;
      console.log(response);
      if (response.code == "201") {
        alert("Customer " + response.data.firstName + " successful")
      }
    }, error => {
      this.loading = false;
      if (error.error.code == "400") {
        alert(error.error.data);
      }
    })

  }

  getNicImage($event: Event) {

  }
}
