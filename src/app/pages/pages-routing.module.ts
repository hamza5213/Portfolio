import { CaseStudyComponent } from './information/case-study/case-study.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ContactComponent } from './information/contact/contact.component';


const routes: Routes = [{
  path: '',
  component: MainLayoutComponent ,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'projects/:category',
      component: CaseStudyComponent,
    },
    {
      path: 'contactUs',
      component: ContactComponent,
    },
    {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
