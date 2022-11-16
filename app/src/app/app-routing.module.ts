import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientiComponent } from './navbar/clienti/clienti.component';
import { FattureComponent } from './navbar/fatture/fatture.component';
import { UtentiComponent } from './navbar/utenti/utenti.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { DettagliUtenteComponent } from './navbar/dettagli-utente/dettagli-utente.component';
import { ClientDetailsComponent } from './navbar/clienti/client-details/client-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'client-details',
    component: ClientDetailsComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'clienti',
        component: ClientiComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'fatture',
        component: FattureComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':utenti',
        component: UtentiComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
          {
            path: ':id',
            component: DettagliUtenteComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
