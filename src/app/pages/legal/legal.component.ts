import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  rawudih: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nirmaan360')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Legal - Nirmaan360',
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
