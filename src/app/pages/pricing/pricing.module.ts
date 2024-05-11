import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { Pricing } from './pricing.component'
import { ComponentsModule } from 'src/app/components/components.module'

const routes = [
  {
    path: '',
    component: Pricing,
  },
]

@NgModule({
  declarations: [Pricing],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Pricing],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PricingModule {}
