import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespondPageRoutingModule } from './respond-routing.module';

import { RespondPage } from './respond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespondPageRoutingModule
  ],
  declarations: [RespondPage]
})
export class RespondPageModule {}
