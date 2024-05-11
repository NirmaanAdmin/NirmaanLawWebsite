import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.title.setTitle('Tutorials - Nirmaan360')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Tutorials - Nirmaan360',
      },
    ])
  }
  handleClick(): void {
    const element = this.el.nativeElement.querySelector(`#tutorial`);

    if (element) {
      window.scroll({ top: element.offsetTop, behavior: 'smooth' });
    }
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
