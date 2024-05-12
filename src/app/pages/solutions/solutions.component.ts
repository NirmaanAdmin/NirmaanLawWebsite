import { Component, ElementRef, Input, Renderer2 } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: 'solutions.component.html',
  styleUrls: ['solutions.component.css'],
})
export class Solutions {
  isActive: number = 100
  closeMenu() {
    this.isActive = 100;
  }
  openMenu() {
    this.isActive = 0
  }
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
  rawitjn: string = ' '
  rawhrak: string = ' '
  rawg2j2: string = ' '

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.title.setTitle('Solutions - Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Solutions - Nirmaan Law',
      },
    ])
  }
  ngOnInit(): void {

    if (this.route.snapshot.params['cardId'] == undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = this.el.nativeElement.querySelector(`#${this.route.snapshot.params['cardId']}`);

      if (element) {
        window.scroll({ top: element.offsetTop, behavior: 'smooth' });
      }
    }
  }
  clickMore = false;
  showData() {
    this.clickMore = !this.clickMore;
  }
}
