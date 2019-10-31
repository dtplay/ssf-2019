import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

const MODULES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bgg',
    // Lazy loading
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule),
    canActivateChild: [ AuthService ]
  },
  { path: '**', redirectTo: '/bgg', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, RouterModule.forRoot(MODULES),
    MaterialModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
