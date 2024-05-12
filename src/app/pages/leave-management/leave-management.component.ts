import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  constructor(private title: Title,
    private router: Router, private meta: Meta, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) {
    this.title.setTitle('Leave Management - Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Leave Management - Nirmaan Law',
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
