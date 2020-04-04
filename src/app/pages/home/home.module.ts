import { OurServicesComponent } from './our-services/our-services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { HomeRoutingModule } from './home-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { PitchComponent } from './pitch/pitch.component';
import { ServicesCountsComponent } from './our-services/services-counts/services-counts.component';
import { NgwWowModule } from 'ngx-wow';
import { ProjectsComponent } from './projects/projects.component';
import { UspComponent } from './usp/usp.component';


@NgModule({
  declarations: [HomeComponent, SliderComponent, SummaryComponent, PitchComponent, OurServicesComponent, ServicesCountsComponent, ProjectsComponent, UspComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgwWowModule
  ]
})
export class HomeModule { }
