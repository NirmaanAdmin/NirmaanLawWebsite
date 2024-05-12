import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent implements OnInit {
  constructor(private title: Title,
    private router: Router, private meta: Meta, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.title.setTitle('Event Handling - Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Event Handling - Nirmaan Law',
      },
    ])
  }
  navigate() {
    console.log("as")
    this.router.navigate(['/solutions']);
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
