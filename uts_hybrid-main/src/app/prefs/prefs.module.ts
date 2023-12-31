import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefsPageRoutingModule } from './prefs-routing.module';

import { PrefsPage } from './prefs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefsPageRoutingModule
  ],
  declarations: [PrefsPage]
})
export class PrefsPageModule {}
