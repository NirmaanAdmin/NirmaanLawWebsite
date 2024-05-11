import { Component, Input } from '@angular/core'

@Component({
  selector: 'active-users',
  templateUrl: 'active-users.component.html',
  styleUrls: ['active-users.component.css'],
})
export class ActiveUsers {
  @Input()
  Caption: string = 'Caption'
  @Input()
  Statistic: string = 'Description'
  constructor() {}
}
