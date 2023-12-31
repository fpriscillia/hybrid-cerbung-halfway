import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefsPage } from './prefs.page';

const routes: Routes = [
  {
    path: '',
    component: PrefsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrefsPageRoutingModule {}
