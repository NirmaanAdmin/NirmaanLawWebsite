import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonal',
  templateUrl: 'testimonal.component.html',
  styleUrls: ['testimonal.component.css'],
})
export class Testimonal {
  @Input()
  From: string = 'Vista Social'
  @Input()
  Avatar_alt: string = 'image'
  @Input()
  Avatar_src: string =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200'
  @Input()
  Name: string = 'Andy Smith'
  @Input()
  Quote: string =
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
  constructor() {}
}
