import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DiaProvider} from './../../providers/dia/dia';

/**
 * Generated class for the DiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias',
  templateUrl: 'dias.html',
})
export class DiasPage {
dias:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public diaProvider:DiaProvider) {
      this.getDias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiasPage');
  }
getDias(){
    this.diaProvider.getDias().then(data=>{
        this.dias = data;
        console.log(data);
    })
    
}
goToDia(dia){
    this.navCtrl.push('HermandadesPage', {
      item: dia
    });
}
}
