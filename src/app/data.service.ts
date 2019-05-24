import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  createDb() {

    // tslint:disable-next-line:prefer-const
    let products = [
      { id: 1, name: 'Loan 1234567890', status: 'REO' },
      { id: 2, name: 'Loan 1234567891', status: 'Delinquent'},
      { id: 3, name: 'Loan 1234567892', status: 'Sold' }
    ];

    return { products };
  }
}
