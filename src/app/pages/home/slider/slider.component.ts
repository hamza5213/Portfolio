import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#slider').layerSlider({
      sliderVersion: '6.0.0',
      type: 'fullwidth',
      responsiveUnder: 0,
      layersContainer: 1200,
      maxRatio: 1,
      parallaxScrollReverse: true,
      hideUnder: 0,
      hideOver: 100000,
      skin: 'v5',
      showBarTimer: false,
      showCircleTimer: false,
      thumbnailNavigation: 'disabled',
      allowRestartOnResize: true,
      skinsPath: 'assets/skins/',
      height: 870
    });
  }

}
