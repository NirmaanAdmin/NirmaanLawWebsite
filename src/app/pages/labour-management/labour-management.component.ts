import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-labour-management',
  templateUrl: './labour-management.component.html',
  styleUrls: ['./labour-management.component.css']
})
export class LabourManagementComponent implements OnInit {

  constructor(private title: Title, private meta: Meta, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.title.setTitle('Labour - Nirmaan360')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Labour - Nirmaan360',
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
  clickMore = false;
  showData() {
    this.clickMore = !this.clickMore;
  }

}
