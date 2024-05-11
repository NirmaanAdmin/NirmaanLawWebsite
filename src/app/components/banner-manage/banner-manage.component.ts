import { Component, Input } from '@angular/core'

@Component({
  selector: 'banner-manage',
  templateUrl: 'banner-manage.component.html',
  styleUrls: ['banner-manage.component.css'],
})
export class BannerManage {
  @Input()
  text2: string =
    'No more struggling to keep track of files across multiple platforms or sifting through cluttered file cabinets. With just a few clicks, you can access all your project documents online and even search for specific files with ease.'
  @Input()
  text3: string = 'Get started\n'
  @Input()
  imagesrc1: string =
    '/assets/logos/office-document-file-folders-vector-600h.jpg'
  @Input()
  CardsImage_alt: string = 'pastedImage'
  @Input()
  imagesrc: string = 'b3c20576-8ed4-4e58-be9f-806c53bc3ff3'
  @Input()
  text: string = 'Project Files'
  @Input()
  text1: string = 'Access  documents you need from anywhere,  anytime'
  @Input()
  CardsImage_src: string = '4a2b9777-1ae8-4950-8cd8-d386e86c5114'
  @Input()
  imagealt: string = 'image'
  @Input()
  imagealt1: string = 'image'
  constructor() {}
}
