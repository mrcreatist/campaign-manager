import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabRoutingModule } from './tab-routing.module';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { DataRowComponent } from './data-row/data-row.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TabContainerComponent,
    DataRowComponent
  ],
  imports: [
    CommonModule,
    TabRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    TabContainerComponent
  ]
})
export class TabModule { }
