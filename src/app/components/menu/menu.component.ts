import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  @Input()
  Logo_src: string = '/pastedimage-no9b-1500h.png'
  @Input()
  Logo_alt: string = 'pastedImage'
  @Input()
  text: string = 'Solutions'
  @Input()
  text1: string = 'How it works'
  @Input()
  text2: string = 'Prices'
  @Input()
  Sign_In: string = 'Sign Up'
  @Input()
  image_src: string = '/nirmaan%20360caviar%20dreams%20white-01-200h.png'
  @Input()
  image_alt: string = 'image'
  @Input()
  text3: string = 'Solutions'
  @Input()
  text4: string = 'How it works'
  @Input()
  text5: string = 'Pricing'
  @Input()
  text6: string = 'Book a Demo'
  @Input()
  Mobile_Menu_Button_src: string = '/pastedimage-yxbd.svg'
  @Input()
  Mobile_Menu_Button_alt: string = 'pastedImage'
  // @Input()
  // rootClassName: string = ''
  constructor() { }
}