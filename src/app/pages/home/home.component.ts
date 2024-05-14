import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit {
  receiveData(data: string) {
    this.ngOnInit()
  }
  rawudih: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Nirmaan Law',
      },
    ])
  }
  isActive: number = 100
  closeMenu() {
    this.isActive = 100;
  }
  openMenu() {
    this.isActive = 0
  }
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  clickMore = false;
  showData() {
    this.clickMore = !this.clickMore;
  }
}
