export default class BookingDTO {

  constructor(customerNIC: string, vehicle_number: string, booking_date: string, departure_date: string, arrival_date: string, booking_type: string, booking_status: string) {
    this._customerNIC = customerNIC;
    this._vehicle_number = vehicle_number;
    this._booking_date = booking_date;
    this._departure_date = departure_date;
    this._arrival_date = arrival_date;
    this._booking_type = booking_type;
    this._booking_status = booking_status;
  }

  private _customerNIC: string;

  get customerNIC(): string {
    return this._customerNIC;
  }

  set customerNIC(value: string) {
    this._customerNIC = value;
  }

  private _vehicle_number: string;

  get vehicle_number(): string {
    return this._vehicle_number;
  }

  set vehicle_number(value: string) {
    this._vehicle_number = value;
  }

  private _booking_date: string;

  get booking_date(): string {
    return this._booking_date;
  }

  set booking_date(value: string) {
    this._booking_date = value;
  }

  private _departure_date: string;

  get departure_date(): string {
    return this._departure_date;
  }

  set departure_date(value: string) {
    this._departure_date = value;
  }

  private _arrival_date: string;

  get arrival_date(): string {
    return this._arrival_date;
  }

  set arrival_date(value: string) {
    this._arrival_date = value;
  }

  private _booking_type: string;

  get booking_type(): string {
    return this._booking_type;
  }

  set booking_type(value: string) {
    this._booking_type = value;
  }

  private _booking_status: string;

  get booking_status(): string {
    return this._booking_status;
  }

  set booking_status(value: string) {
    this._booking_status = value;
  }
}
