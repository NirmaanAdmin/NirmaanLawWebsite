import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  constructor(private title: Title,
    private router: Router, private meta: Meta, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.title.setTitle('Permissions - Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Permissions - Nirmaan Law',
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
