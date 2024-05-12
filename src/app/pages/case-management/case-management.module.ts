import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseManagementComponent } from './case-management.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



const routes = [
  {
    path: '',
    component: CaseManagementComponent,
  },
]


@NgModule({
  declarations: [CaseManagementComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  // exports: [InventoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CaseManagementModule { }
