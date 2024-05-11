import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card31',
  templateUrl: 'feature-card31.component.html',
  styleUrls: ['feature-card31.component.css'],
})
export class FeatureCard31 {
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
  @Input()
  rootClassName: string = ''
  @Input()
  action: string = 'SEE MORE'
  constructor() {}
}
