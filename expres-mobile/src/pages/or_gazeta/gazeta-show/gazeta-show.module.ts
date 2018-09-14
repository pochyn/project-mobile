import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GazetaShowPage } from './gazeta-show';

@NgModule({
  declarations: [
    GazetaShowPage,
  ],
  imports: [
    IonicPageModule.forChild(GazetaShowPage),
  ],
})
export class GazetaShowPageModule {}
