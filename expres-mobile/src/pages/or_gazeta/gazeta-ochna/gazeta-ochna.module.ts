import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GazetaOchnaPage } from './gazeta-ochna';

@NgModule({
  declarations: [
    GazetaOchnaPage,
  ],
  imports: [
    IonicPageModule.forChild(GazetaOchnaPage),
  ],
})
export class GazetaOchnaPageModule {}
