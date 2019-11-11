import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home';
import { SharedModule } from './shared/shared.module';

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
  }
];

@NgModule({
  declarations: [...directives],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
