export default class UserDTO {
  constructor(user_Id: string, email: string, password: string, post: string) {
    this._user_Id = user_Id;
    this._email = email;
    this._password = password;
    this._post = post;
  }

  private _user_Id: string;

  get user_Id(): string {
    return this._user_Id;
  }

  set user_Id(value: string) {
    this._user_Id = value;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  private _post: string;

  get post(): string {
    return this._post;
  }

  set post(value: string) {
    this._post = value;
  }
}
