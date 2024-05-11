import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';
import { RouterModule } from '@angular/router'

import 'dangerous-html'

import { ComponentsModule } from 'src/app/components/components.module'
const routes = [
  {
    path: '',
    component: LegalComponent,
  },
]
@NgModule({
  declarations: [
    LegalComponent
  ],
  imports: [
    CommonModule, ComponentsModule, RouterModule.forChild(routes)

  ],
  // exports: [LegalModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LegalModule { }

