import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadcerbungPageRoutingModule } from './readcerbung-routing.module';

import { ReadcerbungPage } from './readcerbung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadcerbungPageRoutingModule
  ],
  declarations: [ReadcerbungPage]
})
export class ReadcerbungPageModule {}
