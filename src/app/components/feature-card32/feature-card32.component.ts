import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card32',
  templateUrl: 'feature-card32.component.html',
  styleUrls: ['feature-card32.component.css'],
})
export class FeatureCard32 {
  @Input()
  action: string = 'dqdq'
  @Input()
  text: string = 'SEE MORE'
  @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Manage Tasks'
  @Input()
  description: string = ''
  @Input()
  cardId: string = ''
  constructor() { }
}
