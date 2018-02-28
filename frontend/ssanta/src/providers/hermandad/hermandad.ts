import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Api } from './../api/api';
import * as Constants from './../constants/constants';
/*
  Generated class for the HermandadProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HermandadProvider {
id_ciudad:any= Constants.API_CIUDAD_ID;
params:any;
 
  constructor(public http: HttpClient,public api: Api) {
    console.log('Hello HermandadProvider Provider');
  }
getHermandades(id_dia) {
    this.id_ciudad = Constants.API_CIUDAD_ID;
    this.params = {'id_ciudad': this.id_ciudad,'id_dia':id_dia};
    return new Promise(resolve => {
      this.api.post('hermandades',this.params).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  getHermandad(id_hermandad){
      this.params = {'id': id_hermandad};
      return new Promise(resolve => {
      this.api.post('hermandades',this.params).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
