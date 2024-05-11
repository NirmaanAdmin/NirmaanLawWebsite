import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Solutions } from './solutions.component'
import { ComponentsModule } from 'src/app/components/components.module'

const routes = [
  {
    path: '',
    component: Solutions,
  },
  {
    path: ':cardId',
    component: Solutions,
  }
]

@NgModule({
  declarations: [Solutions],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Solutions],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolutionsModule { }
