import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home';
import { SharedModule } from './shared/shared.module';
import { AppEffects } from './state/app.effects';
import { CustomerEffects } from './state/customer.effects';
import { metaReducers, reducers } from './state/reducers';

const directives = [AppComponent, HomeComponent];

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'getting-started',
    loadChildren: () =>
      import('./features/getting-started/getting-started.module').then(
        m => m.GettingStartedModule
      )
  },
  {
    path: 'data',
    loadChildren: () =>
      import('./features/data/data.module').then(m => m.DataModule)
  },
  {
    path: 'column',
    loadChildren: () =>
      import('./features/column/column.module').then(m => m.ColumnModule)
  },
  {
    path: 'filtering',
    loadChildren: () =>
      import('./features/filtering/filtering.module').then(
        m => m.FilteringModule
      )
  }
];

@NgModule({
  declarations: [...directives],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
