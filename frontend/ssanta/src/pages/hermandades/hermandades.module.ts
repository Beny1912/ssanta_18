import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HermandadesPage } from './hermandades';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HermandadesPage,
  ],
  imports: [
    IonicPageModule.forChild(HermandadesPage),
        TranslateModule.forChild()

  ],
  exports: [
    HermandadesPage  
  ]
})
export class HermandadesPageModule {}
