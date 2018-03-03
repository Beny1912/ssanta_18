import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RutaProvider} from './../../providers/ruta/ruta'

/**
 * Generated class for the RutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutas',
  templateUrl: 'rutas.html',
})
export class RutasPage {
item:any;
title:any;
id_hermandad:any;
recorrido:any;
array_recorrido:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public rutaProvider:RutaProvider) {
      this.item = navParams.get('item');
       console.log("item",this.item);
       this.title = this.item.nombre;
       this.id_hermandad = this.item.id;
       this.getRuta();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutasPage');
  }
getRuta(){
    this.rutaProvider.getRuta(this.id_hermandad).then(data=>{
        this.recorrido = data[0].recorrido;
        console.log("recorrido",this.recorrido);
        this.array_recorrido =this.recorrido.split("-");
        console.log(this.array_recorrido);
    })
    
}
}
