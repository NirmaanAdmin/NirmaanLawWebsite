import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rawudih: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nirmaan360')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Nirmaan360',
      },
    ])
  }
  ngOnInit(): void {
  }

}
