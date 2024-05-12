import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventHandlingComponent } from './event-handling.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';




const routes = [
  {
    path: '',
    component: EventHandlingComponent,
  },
]


@NgModule({
  declarations: [EventHandlingComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  // exports: [InventoryComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class EventHandlingModule { }
