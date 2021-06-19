import UserDTO from "./UserDTO";

export default class CustomerDTO {
  constructor(customerNIC: string, user_Id: string, firstName: string, lastName: string, address: string, contact: string, email: string, licenceNumber: string, nicImagePath: string, licenseImagePath: string, user: UserDTO) {
    this._customerNIC = customerNIC;
    this._user_Id = user_Id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
    this._contact = contact;
    this._email = email;
    this._licenceNumber = licenceNumber;
    this._nicImagePath = nicImagePath;
    this._licenseImagePath = licenseImagePath;
    this._user = user;
  }

  private _customerNIC: string;

  get customerNIC(): string {
    return this._customerNIC;
  }

  set customerNIC(value: string) {
    this._customerNIC = value;
  }

  private _user_Id: string;

  get user_Id(): string {
    return this._user_Id;
  }

  set user_Id(value: string) {
    this._user_Id = value;
  }

  private _firstName: string;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  private _lastName: string;

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  private _address: string;

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  private _contact: string;

  get contact(): string {
    return this._contact;
  }

  set contact(value: string) {
    this._contact = value;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _licenceNumber: string;

  get licenceNumber(): string {
    return this._licenceNumber;
  }

  set licenceNumber(value: string) {
    this._licenceNumber = value;
  }

  private _nicImagePath: string;

  get nicImagePath(): string {
    return this._nicImagePath;
  }

  set nicImagePath(value: string) {
    this._nicImagePath = value;
  }

  private _licenseImagePath: string;

  get licenseImagePath(): string {
    return this._licenseImagePath;
  }

  set licenseImagePath(value: string) {
    this._licenseImagePath = value;
  }

  private _user: UserDTO;

  get user(): UserDTO {
    return this._user;
  }

  set user(value: UserDTO) {
    this._user = value;
  }
}
