import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Api } from './../api/api';
import * as Constants from './../constants/constants';


/*
  Generated class for the DiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiaProvider {
    id_ciudad:any
    params:any
  constructor(public http: HttpClient,public api: Api) {
    console.log('Hello DiaProvider Provider');
  }

getDias() {
    this.id_ciudad = Constants.API_CIUDAD_ID;
    this.params = {'id_ciudad': this.id_ciudad};
    return new Promise(resolve => {
      this.api.post('dias',this.params).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
