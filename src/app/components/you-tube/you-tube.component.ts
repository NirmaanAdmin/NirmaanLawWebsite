import { Component, Input } from '@angular/core'

@Component({
  selector: 'you-tube',
  templateUrl: 'you-tube.component.html',
  styleUrls: ['you-tube.component.css'],
})
export class YouTube {
  @Input()
  pastedImage_src: string = '/assets/logos/pastedimage-smjb.svg'
  @Input()
  pastedImage_alt: string = 'pastedImage'
  constructor() {}
}
