import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GetStarted } from './get-started.component'
import { ComponentsModule } from 'src/app/components/components.module'
import { FormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: GetStarted,
  },

]

@NgModule({
  declarations: [GetStarted],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes),FormsModule],
  exports: [GetStarted],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GetStartedModule { }
