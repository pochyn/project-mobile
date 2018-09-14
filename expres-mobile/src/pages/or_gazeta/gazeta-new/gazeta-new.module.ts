import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GazetaNewPage } from './gazeta-new';

@NgModule({
  declarations: [
    GazetaNewPage,
  ],
  imports: [
    IonicPageModule.forChild(GazetaNewPage),
  ],
})
export class GazetaNewPageModule {}
