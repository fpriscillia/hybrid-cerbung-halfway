import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Create2Page } from './create2.page';

const routes: Routes = [
  {
    path: '',
    component: Create2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Create2PageRoutingModule {}
