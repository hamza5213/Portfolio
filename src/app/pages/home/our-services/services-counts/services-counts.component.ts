import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgwWowService } from '../../../../../../node_modules/ngx-wow';

@Component({
  selector: 'our-services-counts',
  templateUrl: './services-counts.component.html',
  styleUrls: ['./services-counts.component.scss']
})
export class ServicesCountsComponent implements OnInit {
 
  constructor(private wowService: NgwWowService) {
    this.wowService.init()
   }

  ngOnInit() {
 
  }



}
