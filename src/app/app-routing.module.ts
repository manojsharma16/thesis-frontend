import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthGuard } from './auth/guards/can-activate.guard';
import { LoginCanActivateGuard } from './auth/guards/login-can-activate.guard';
const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : '',
    canActivate : [LoginCanActivateGuard],
    loadChildren : ()=>import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)
  },
  {
    path : '',
    component : LayoutComponent,
    canActivate : [AuthGuard],
    loadChildren : ()=>import('./layout/layout.module').then(m=>m.LayoutModule)
  },
  { 
    path: '**', redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
