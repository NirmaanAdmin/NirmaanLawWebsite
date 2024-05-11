import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
})
export class Schedule {
  @Input()
  text: string = 'Schedule'
  @Input()
  Icon_src: string = '/assets/pastedimage-fii6m-200h.png'
  @Input()
  Icon_alt: string = 'pastedImage'
  @Input()
  text1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  constructor() {}
}
