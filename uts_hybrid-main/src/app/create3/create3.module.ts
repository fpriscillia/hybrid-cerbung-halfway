import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Create3PageRoutingModule } from './create3-routing.module';

import { Create3Page } from './create3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Create3PageRoutingModule
  ],
  declarations: [Create3Page]
})
export class Create3PageModule {}
