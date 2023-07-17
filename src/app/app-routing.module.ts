import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./modules/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
