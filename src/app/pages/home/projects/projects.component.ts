import { ProjectCategory } from './../models/project-category.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectCategories: ProjectCategory[] = [
    {
      baseImgUrl : "theme_styles/images/projects/photographHire.jpg",
      extendedImgUrl :"theme_styles/images/projects/photographHire.jpg",
      title : "Web Development",
      caption : "A Photographer Hiring Portal where customers could directly book photographers."
    },

    {
      baseImgUrl : "theme_styles/images/projects/AgencyApp2.png",
      extendedImgUrl :"theme_styles/images/projects/AgencyApp2.png",
      title : "Mobile Development",
      caption : "One super application for digital agencies that combines project management, team management and CRM."
    },

    {
      baseImgUrl : "theme_styles/images/projects/blackJackPro.jpeg",
      extendedImgUrl :"theme_styles/images/projects/blackJackPro.jpeg",
      title : "UI/UX Designs",
      caption : "A game launch screen"
    },
    
    {
      baseImgUrl : "theme_styles/images/projects/eduver.jpg",
      extendedImgUrl :"theme_styles/images/projects/eduver.jpg",
      title : "Data Science",
      caption : "A Career Counseling Portal powered by Machine Learning"
    },
  ]
  
  constructor() { }
  
  ngOnInit() {
    $(".owl-carousel").owlCarousel({
              margin:20,
              nav:true,
              loop:true,
              items:4
          })
  }

}
