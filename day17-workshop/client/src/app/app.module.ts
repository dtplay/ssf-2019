import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

const MODULES: Routes = [
  { path: 'bgg',
    // Lazy loading
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule )
  },
  { path: '**', redirectTo: '/bgg', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(MODULES),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
