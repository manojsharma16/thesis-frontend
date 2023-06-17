import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThesisListRoutingModule } from './thesis-list-routing.module';
import { ThesisListComponent } from './thesis-list.component';

@NgModule({
  declarations: [
    ThesisListComponent
  ],
  imports: [
    CommonModule,
    ThesisListRoutingModule
  ]
})
export class ThesisListModule { }
