import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrNewRegionsPage } from './gr-new-regions';

@NgModule({
  declarations: [
    GrNewRegionsPage,
  ],
  imports: [
    IonicPageModule.forChild(GrNewRegionsPage),
  ],
})
export class GrNewRegionsPageModule {}
