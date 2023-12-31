import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadcerbungPage } from './readcerbung.page';

const routes: Routes = [
  {
    path: '',
    component: ReadcerbungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadcerbungPageRoutingModule {}
