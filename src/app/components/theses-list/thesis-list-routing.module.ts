import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThesisListComponent } from './thesis-list.component';

const routes: Routes = [
  {
    path : '',
    component: ThesisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThesisListRoutingModule { }
