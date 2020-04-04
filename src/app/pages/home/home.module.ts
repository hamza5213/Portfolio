import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeComponent, SliderComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
