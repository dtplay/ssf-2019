import { NgModule } from '@angular/core';

import {
  MatToolbarModule, MatListModule,
  MatIconModule, MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  FlexLayoutModule,
  MatToolbarModule, MatListModule,
  MatIconModule, MatCardModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
