import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Create3Page } from './create3.page';

const routes: Routes = [
  {
    path: '',
    component: Create3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Create3PageRoutingModule {}
