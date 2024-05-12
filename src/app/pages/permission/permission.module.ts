import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


const routes = [
  {
    path: '',
    component: PermissionComponent,
  },
]


@NgModule({
  declarations: [PermissionComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  // exports: [InventoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PermissionModule { }
