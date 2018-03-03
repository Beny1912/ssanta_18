import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Api } from './../api/api';
import * as Constants from './../constants/constants';

/*
  Generated class for the RutaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RutaProvider {
    id_ciudad:any
    where:any
    filter:any;
    params:any;

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello RutaProvider Provider');
  }
  getRuta(id_hermandad){
      this.filter=Constants.FILTER;
    this.id_ciudad = Constants.API_CIUDAD_ID;
    this.params = JSON.stringify({'where':{'id_hermandad':{"like":id_hermandad}}});
    return new Promise(resolve => {
        this.api.get('recorridos' + this.filter + this.params).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
