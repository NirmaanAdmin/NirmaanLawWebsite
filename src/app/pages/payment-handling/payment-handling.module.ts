import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentHandlingComponent } from './payment-handling.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';



const routes = [
  {
    path: '',
    component: PaymentHandlingComponent,
  },
]


@NgModule({
  declarations: [PaymentHandlingComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  // exports: [InventoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PaymentHandlingModule { }
