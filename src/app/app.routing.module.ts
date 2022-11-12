import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { NgModule, InjectionToken } from '@angular/core';
import { ClaimsComponent } from './claims/claims.component';
import { NotFoundComponent } from './shared/notfound/not-found.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

@NgModule({
  declarations: [  ],
    providers: [
        {
            provide: externalUrlProvider,
            useValue: (route: ActivatedRouteSnapshot) => {
                const externalUrl = route.paramMap.get('externalUrl');
                window.open(externalUrl, '_blank');
            },
        },
    ],
  imports: [
    RouterModule.forRoot([
      { path: 'externalRedirect', resolve: { url: externalUrlProvider },      component: NotFoundComponent },
      { path: 'claims', loadChildren: './claims/claims.module#ClaimsModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}

