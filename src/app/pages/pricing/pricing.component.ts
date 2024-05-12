import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
})
export class Pricing {
  rawl896: string = ' '
  raw2oom: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Pricing - Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Pricing - Nirmaan Law',
      },
    ])
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  isActive: number = 100
  closeMenu() {
    this.isActive = 100;
  }
  openMenu() {
    this.isActive = 0
  }
  allAccordian: any[] = [
    false, false, false, false, false
  ]
  operateAccordian(id) {
    for (let index = 0; index < this.allAccordian.length; index++) {
      if (index != id)
        this.allAccordian[index] = false;

    }
    this.allAccordian[id] = !this.allAccordian[id];
    // console.log(this.allAccordian)
  }
  clickMore = false;
  showData() {
    this.clickMore = !this.clickMore;
  }
}
