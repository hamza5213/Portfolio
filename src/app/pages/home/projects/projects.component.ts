import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    $(".owl-carousel").owlCarousel({
              margin:20,
              nav:true,
              loop:true,
              items:4
          })
}

  ngAfterViewInit() {

//     $('.owl-carousel').owl({
//       loop:true,
//       margin:10,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:3
//           },
//           1000:{
//               items:5
//           }
//       }
//   })
  }

}
