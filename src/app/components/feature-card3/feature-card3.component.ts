import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card3',
  templateUrl: 'feature-card3.component.html',
  styleUrls: ['feature-card3.component.css'],
})
export class FeatureCard3 {
  @Input()
  rootClassName: string = ''
  @Input()
  action: string = 'SEE MORE'
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
  constructor() {}
}
