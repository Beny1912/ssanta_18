import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export const API_ENDPOINT= 'https://api-semana-santa.herokuapp.com/api';
  export const API_CIUDAD_ID = '5a969a03d6a168211c8705fa';
  export const FILTER = '?filter=';
  
@Injectable()

export class ConstantsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConstantsProvider Provider');
  }
  

}
