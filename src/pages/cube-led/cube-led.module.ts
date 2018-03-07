import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CubeLedPage } from './cube-led';

@NgModule({
  declarations: [
    CubeLedPage,
  ],
  imports: [
    IonicPageModule.forChild(CubeLedPage),
  ],
})
export class CubeLedPageModule {}
