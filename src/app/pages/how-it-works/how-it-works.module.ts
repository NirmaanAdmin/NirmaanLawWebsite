import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { HowItWorks } from './how-it-works.component'
import { ComponentsModule } from 'src/app/components/components.module'

const routes = [
  {
    path: '',
    component: HowItWorks,
  },
]

@NgModule({
  declarations: [HowItWorks],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [HowItWorks],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HowItWorksModule {}
