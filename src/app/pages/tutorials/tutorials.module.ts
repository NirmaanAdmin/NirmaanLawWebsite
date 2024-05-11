import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './tutorials.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes = [
  {
    path: '',
    component: TutorialsComponent,
  },
  {
    path: ':cardId',
    component: TutorialsComponent,
  }
]

@NgModule({
  declarations: [TutorialsComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [TutorialsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TutorialsModule { }
