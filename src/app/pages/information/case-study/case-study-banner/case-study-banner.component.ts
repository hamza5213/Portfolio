import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'case-study-banner',
  templateUrl: './case-study-banner.component.html',
  styleUrls: ['./case-study-banner.component.scss']
})
export class CaseStudyBannerComponent implements OnInit {

  @Input() caseStudyCategory: string = "Web Development";

  constructor() { }

  ngOnInit() {
  }

}
