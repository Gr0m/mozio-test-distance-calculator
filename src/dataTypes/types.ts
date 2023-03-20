export interface InputsData<T = string> {
  label: string;
  value: T;
  touched: boolean;
  error?: string;
}

export interface QueryString {
  destinations: string,
  passengers: number,
  date: string
}

export interface Destination {
  city: string;
  distance?: number;
}
