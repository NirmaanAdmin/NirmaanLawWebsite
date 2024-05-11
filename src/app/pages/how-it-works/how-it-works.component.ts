import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'how-it-works',
  templateUrl: 'how-it-works.component.html',
  styleUrls: ['how-it-works.component.css'],
})
export class HowItWorks {
  rawiw22: string = ' '
  rawfl3r: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('How-it-works - Nirmaan360')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'How-it-works - Nirmaan360',
      },
    ])
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  isActive: number = 100
  closeMenu() {
    this.isActive = 100;
  }
  openMenu() {
    this.isActive = 0
  }
  clickMore = false;
  showData() {
    this.clickMore = !this.clickMore;
  }
}
