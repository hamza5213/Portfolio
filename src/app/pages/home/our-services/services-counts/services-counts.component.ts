import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgwWowService } from '../../../../../../node_modules/ngx-wow';
// import {WOW} from '../../../../../theme_styles/js/wow.js'
// import { NONE_TYPE } from '../../../../../../node_modules/@angular/compiler/src/output/output_ast';
@Component({
  selector: 'our-services-counts',
  templateUrl: './services-counts.component.html',
  styleUrls: ['./services-counts.component.scss']
})
export class ServicesCountsComponent implements OnInit, AfterViewInit {
  // wow;
  constructor(private wowService: NgwWowService) {
    this.wowService.init()
   }

  ngOnInit() {
    // new WOW().init()
  }

  ngAfterViewInit(){
    // this.wowService.init()
    // this.wow.sync();
  }

}
