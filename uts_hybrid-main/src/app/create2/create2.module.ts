import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Create2PageRoutingModule } from './create2-routing.module';

import { Create2Page } from './create2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Create2PageRoutingModule
  ],
  declarations: [Create2Page]
})
export class Create2PageModule {}
