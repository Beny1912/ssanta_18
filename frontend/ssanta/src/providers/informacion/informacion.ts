import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Api } from './../api/api';
import * as Constants from './../constants/constants';
/*
  Generated class for the InformacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InformacionProvider {
params:any;
  constructor(public http: HttpClient,public api: Api) {
    console.log('Hello InformacionProvider Provider');
  }
getInfo(id_hermandad){
    this.params = {'id': id_hermandad};
     return new Promise(resolve => {
      this.api.post('informacion',this.params).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
}
}
