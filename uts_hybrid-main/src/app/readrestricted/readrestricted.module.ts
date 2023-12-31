import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadrestrictedPageRoutingModule } from './readrestricted-routing.module';

import { ReadrestrictedPage } from './readrestricted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadrestrictedPageRoutingModule
  ],
  declarations: [ReadrestrictedPage]
})
export class ReadrestrictedPageModule {}
