import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientiComponent } from './navbar/clienti/clienti.component';
import { FattureComponent } from './navbar/fatture/fatture.component';
import { UtentiComponent } from './navbar/utenti/utenti.component';
import { DettagliUtenteComponent } from './navbar/dettagli-utente/dettagli-utente.component';
import { ClientDetailsPage } from './navbar/clienti/client-details/client-details.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { FattureDetailsComponent } from './navbar/fatture/fatture-details/fatture-details.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'clienti',
        component: ClientiComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: ':id',
            component: ClientDetailsPage
          }
        ]
      },
      {
        path: 'fatture',
        component: FattureComponent,
        canActivate: [AuthGuard],
        children: [
          {
          path: ":id",
          component: FattureDetailsComponent
          }
        ]
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
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
