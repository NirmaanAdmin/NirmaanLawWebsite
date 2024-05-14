import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer1',
  templateUrl: 'footer1.component.html',
  styleUrls: ['footer1.component.css'],
})
export class Footer1 {
  @Input()
  textinputplaceholder: string = 'Enter your email'
  @Input()
  rootClassName: string = ''
  @Input()
  imagesrc: string = '/assets/nirmaan%20360caviar%20dreams%20white-01-200h.png'
  @Input()
  text1: string =
    'Say HI to us to get insights on the future of construction industry.'
  @Input()
  imagealt: string = 'image'
  @Input()
  text: string = 'Copyright © Nirmaan Law - 2023'
  @Input()
  text3: string = 'Subscribe'
  @Input()
  text2: string = 'Contact'
  constructor() { }
}
