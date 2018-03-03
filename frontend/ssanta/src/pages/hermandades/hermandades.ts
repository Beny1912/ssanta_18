import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HermandadProvider} from './../../providers/hermandad/hermandad';


/**
 * Generated class for the HermandadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hermandades',
  templateUrl: 'hermandades.html',
})
export class HermandadesPage {
    item:any;
    title:any;
    id_dia:any;
    hermandades:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public hermandadProvider:HermandadProvider) {
       this.item = navParams.get('item');
       console.log("item",this.item);
       this.title = this.item.nombre;
        this.getHermandades();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HermandadesPage');
  }
  ionViewWillEnter(){
            
  }
getHermandades(){
    console.log("entra aqui",this.item);
    this.id_dia = this.item.id;
    this.hermandadProvider.getHermandades(this.id_dia).then(data=>{
        this.hermandades = data;
        console.log(data);
    })
    
}
goToRoute(hermandad){
    
    this.navCtrl.push('RutasPage', {
      item: hermandad
    });

}
}
