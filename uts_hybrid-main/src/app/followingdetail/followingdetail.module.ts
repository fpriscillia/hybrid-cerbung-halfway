import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowingdetailPageRoutingModule } from './followingdetail-routing.module';

import { FollowingdetailPage } from './followingdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowingdetailPageRoutingModule
  ],
  declarations: [FollowingdetailPage]
})
export class FollowingdetailPageModule {}
