import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GNewPage } from './g-new';

@NgModule({
  declarations: [
    GNewPage,
  ],
  imports: [
    IonicPageModule.forChild(GNewPage),
  ],
})
export class GNewPageModule {}
