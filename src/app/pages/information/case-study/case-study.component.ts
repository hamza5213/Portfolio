import { CaseStudy } from './../models/case-study.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  category: string = "Web Development";

  webCaseStudies: CaseStudy[] = [
    {
      title: "Panache Apparel Clothing",
      description: "Panache Apparel is an online brand which means flamboyance and stylishness. Their range of product has something for everyone, as we provide casual wear, semi-formal, and formal wear. Panache’s objective is to provide a huge variety of embroidered, prints and designed fabric. We provided them complete end-to-end solution for there business.",
      imgUrl: "theme_styles/images/projects/pac.PNG",
      siteUrl: "https://www.panacheapparelclothing.com"
    },

    {
      title: "Photographire",
      description: "A Photographer Hiring Portal where customers could directly book photographers, chat with them and provide ratings. One stop shop providing a unique and real time solution to meet public photographic needs.",
      imgUrl: "theme_styles/images/projects/photographHire.jpg",
      siteUrl: null
    },

    {
      title: "Digitery Inventory",
      description: "A Backend Inventory Management System for Magento Store. Developed using Magento 2 REST API and DHL Web Services for stock management and shipping. Helped our clients to grow business by 35%",
      imgUrl: "theme_styles/images/projects/Digitery.jpg",
      siteUrl: null
    },

    
    {
      title: "Smart Broadcast Streaming Manager",
      description: "A Web Application for managing 24 hour live stream. Videos can be scheduled to run on specific timings on specific days.",
      imgUrl: "theme_styles/images/projects/videoStream.jpg",
      siteUrl: null
    }

  ];

  mobileCaseStudies: CaseStudy[] = [
    {
      title: "Shoot",
      description: "How do you share a picture with many people at once? You shoot it! 🚀 Shoot is an application that uses device location to share pictures/videos with people nearby.",
      imgUrl: "theme_styles/images/projects/shootapp.png",
      siteUrl: null
    },

    {
      title: "Agency App",
      description: "One super application for digital agencies that combines project management, team management and CRM.",
      imgUrl: "theme_styles/images/projects/AgencyApp2.png",
      siteUrl: null
    }
  ];

  uiCaseStudies: CaseStudy[] = [
    {
      title: "Bark Avenue ",
      description: "A customly designed 30 paged story for children.",
      imgUrl: "theme_styles/images/projects/BarkAvenue.jpeg",
      siteUrl: "https://barkavenue.co"
    },
    {
      title: "How Franklin Faced his Fears ",
      description: "A customly designed 30 paged story for children.",
      imgUrl: "theme_styles/images/projects/StoryBook1.jpeg",
      siteUrl: null
    },

    {
      title: "Black Jack Pro",
      description: "A Career Counseling Portal for prospective college students.",
      imgUrl: "theme_styles/images/projects/blackJackPro4.png",
      siteUrl: null
    }
  ];

  dataCaseStudies: CaseStudy[] = [
   
    {
      title: "Heluss",
      description: "Heluss disrupts the insurance industry, transforming how the policy works;by utilizing blockchain technologies, smart contracts and AI in claims management. We provided them chat and AI bots, which reduced 30% of their man power",
      imgUrl: "theme_styles/images/projects/heus.PNG",
      siteUrl: "https://www.heluss.com"
    },

    {
      title: "Eduver",
      description: "A Career Counseling Portal for prospective college students. Built a machine learning tool to smartly suggest which university and major would be best for a student.",
      imgUrl: "theme_styles/images/projects/eduver.jpg",
      siteUrl: null
    }
  ]

  private routeSub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      const category = params['category'];
      this.category = Category[category];
    });
   
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}

enum Category {
  webDev = "Web Development",
  mobileDev = "Mobile Development",
  uiux = "UI/UX",
  dataScience = "Data Science",
}
