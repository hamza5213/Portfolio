import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationRoutingModule } from './information-routing.module';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CaseStudyBannerComponent } from './case-study/case-study-banner/case-study-banner.component';
import { CaseStudyItemComponent } from './case-study/case-study-item/case-study-item.component';


@NgModule({
  declarations: [AboutUSComponent, ContactComponent, CaseStudyComponent, CaseStudyBannerComponent, CaseStudyItemComponent],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
