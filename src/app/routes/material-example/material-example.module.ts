import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponents } from './routes-material-example.modules.list';
import { MaterialExampleRoutes } from './material-example.routes';
import 'hammerjs';

@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(MaterialExampleRoutes),
  ],
  declarations: [
    MaterialComponents
  ]
})
export class MaterialExampleModule { }
