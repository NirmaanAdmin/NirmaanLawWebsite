import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class Card {
  @Input()
  text1: string = "What's included"
  @Input()
  text3: string = 'Sed ut pespiciatis unde omnis'
  @Input()
  text5: string = 'Sed ut pespiciatis unde omnis'
  @Input()
  text: string = 'Pay as you go'
  @Input()
  text6: string = 'Sed ut pespiciatis unde omnis'
  @Input()
  text2: string = 'Start for free'
  @Input()
  rootClassName: string = ''
  @Input()
  text4: string = 'Sed ut pespiciatis unde omnis'
  constructor() {}
}
