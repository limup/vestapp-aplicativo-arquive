import { AccountGuard } from './guards/account.guard';
import { CheckoutGuard } from './guards/chekout.guard';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'politica-de-privacidade',
    loadChildren: () => import('./pages/politica-de-privacidade/politica-de-privacidade.module').then( m => m.PoliticaDePrivacidadePageModule)
  },
  {
    path: 'politica-de-trocas',
    loadChildren: () => import('./pages/politica-de-trocas/politica-de-trocas.module').then( m => m.PoliticaDeTrocasPageModule)
  },
  {
    path: 'termos-de-uso',
    loadChildren: () => import('./pages/termos-de-uso/termos-de-uso.module').then( m => m.TermosDeUsoPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule),
    canActivate: [CheckoutGuard]
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./pages/thankyou/thankyou.module').then( m => m.ThankyouPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'vendor-area',
    loadChildren: () => import('./pages/vendor-area/vendor-area.module').then( m => m.VendorAreaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
