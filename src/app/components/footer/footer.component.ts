import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Output() dataEvent = new EventEmitter<string>();

  callInitOfHome() {
    const dataToSend = 'true';

    this.dataEvent.emit(dataToSend);
  }
  @Input()
  textinput_placeholder: string = 'Enter your email'
  @Input()
  text61: string = 'How it works'
  @Input()
  text62: string = 'Home'
  @Input()
  text: string = 'Copyright © Constructo Solutions Pvt Ltd - 2023'
  @Input()
  text63: string = 'Home'
  @Input()
  text31: string = '+91-9426255832'
  @Input()
  text2: string = 'Contact'
  @Input()
  text612: string = 'Pricing'
  @Input()
  text6: string = 'Solutions'
  @Input()
  text9: string = 'Project Contacts'
  @Input()
  text4: string = 'Links'
  @Input()
  text1: string =
    'Say HI to us to get insights on the future of construction industry.'
  @Input()
  text611: string = 'How it works'
  @Input()
  image_src: string = '/assets/law_logo.png'
  @Input()
  text8: string = 'Site Photos'
  @Input()
  image_alt: string = 'image'
  @Input()
  text5: string = 'Subscribe'
  @Input()
  text3: string = 'ask@nirmaan360.com'
  @Input()
  text7: string = 'Plans Management'
  @Input()
  isHome: boolean;
  constructor() { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
