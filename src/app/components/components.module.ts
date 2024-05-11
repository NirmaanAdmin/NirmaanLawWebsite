import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer } from './footer/footer.component'
import { FeatureCard3 } from './feature-card3/feature-card3.component'
import { BannerManage } from './banner-manage/banner-manage.component'
import { ActiveUsers } from './active-users/active-users.component'
import { YouTube } from './you-tube/you-tube.component'
import { Footer1 } from './footer1/footer1.component'
import { Card } from './card/card.component'
import { Testimonal } from './testimonal/testimonal.component'
// import { NavigationLinks } from './navigation-links/navigation-links.component'
import { FeatureCard32 } from './feature-card32/feature-card32.component'
import { Schedule } from './schedule/schedule.component'
import { FeatureCard31 } from './feature-card31/feature-card31.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component'

@NgModule({
  declarations: [
    Footer,
    FeatureCard3,
    BannerManage,
    ActiveUsers,
    YouTube,
    Footer1,
    Card,
    Testimonal,
    // NavigationLinks,
    FeatureCard32,
    Schedule,
    FeatureCard31,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Footer,
    FeatureCard3,
    BannerManage,
    ActiveUsers,
    // YouTube,
    Footer1,
    Card,
    Testimonal,
    // NavigationLinks,
    FeatureCard32,
    Schedule,
    FeatureCard31,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
