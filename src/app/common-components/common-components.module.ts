import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent
  ]
})
export class CommonComponentsModule { }
