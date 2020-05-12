import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'case-study-item',
  templateUrl: './case-study-item.component.html',
  styleUrls: ['./case-study-item.component.scss']
})
export class CaseStudyItemComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() title: string;
  @Input() description: string;
  @Input() siteUrl: string;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
