import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplatesPage } from './templates';

@NgModule({
  declarations: [
    TemplatesPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplatesPage),
  ],
  exports: [
    TemplatesPage
  ]
})
export class TemplatesPageModule {}
