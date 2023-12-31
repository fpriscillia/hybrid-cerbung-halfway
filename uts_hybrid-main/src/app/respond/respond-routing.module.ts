import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespondPage } from './respond.page';

const routes: Routes = [
  {
    path: '',
    component: RespondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespondPageRoutingModule {}
