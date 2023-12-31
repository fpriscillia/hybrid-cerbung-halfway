import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowingdetailPage } from './followingdetail.page';

const routes: Routes = [
  {
    path: '',
    component: FollowingdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowingdetailPageRoutingModule {}
