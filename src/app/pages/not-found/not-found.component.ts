import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'not-found',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.css'],
})
export class NotFound {
  constructor(private title: Title) {
    this.title.setTitle('404 - Not Found')
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
}
