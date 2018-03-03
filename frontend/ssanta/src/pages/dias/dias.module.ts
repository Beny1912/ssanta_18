import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiasPage } from './dias';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DiasPage,
    
  ],
  imports: [
    IonicPageModule.forChild(DiasPage),
     TranslateModule.forChild()
  ],
  exports: [
    DiasPage
  ]
})
export class DiasPageModule {}
