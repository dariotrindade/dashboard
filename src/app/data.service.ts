import { data } from './data';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataConfiguration = data;


  constructor() { }

  getData() {
    return this.dataConfiguration;
  }

}



