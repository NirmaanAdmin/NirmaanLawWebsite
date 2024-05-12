import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveManagementComponent } from './leave-management.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


const routes = [
  {
    path: '',
    component: LeaveManagementComponent,
  },
]


@NgModule({
  declarations: [LeaveManagementComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  // exports: [InventoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class LeaveManagementModule { }
