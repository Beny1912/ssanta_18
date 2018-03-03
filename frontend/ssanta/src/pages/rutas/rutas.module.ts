import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RutasPage } from './rutas';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RutasPage,
  ],
  imports: [
    IonicPageModule.forChild(RutasPage),
    TranslateModule.forChild()
  ],
  exports: [
      RutasPage
  ]
})
export class RutasPageModule {}
