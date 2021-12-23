import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ...fromComponents.components,
    // ToolbarComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,

    ...fromComponents.components ]
})
export class SharedModule { }
