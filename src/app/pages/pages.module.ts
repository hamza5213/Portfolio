import { MenuBarComponent } from './main-layout/menu-bar/menu-bar.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { CopyrightsComponent } from './main-layout/footer/copyrights/copyrights.component';




@NgModule({
  declarations: [ MainLayoutComponent, MenuBarComponent, FooterComponent, CopyrightsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule
  ]
})
export class PagesModule { }
