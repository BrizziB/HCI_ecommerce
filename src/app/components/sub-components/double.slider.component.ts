import { Component, OnInit, ViewChild, ElementRef, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-double-slider',
  templateUrl: './double.slider.component.html',
  styleUrls: ['./double.slider.component.scss']
})


export class DoubleSliderComponent implements OnInit { // queste variabili saranno poi passate tramite costruttore eh
  @ViewChild('slider', { read: ElementRef }) slider: ElementRef;

  range = [50, 150];
  index: number[];
  min = 0;
  max = 200;
  dots = 9;


  config: any = {
    behaviour: 'drag',
    connect: true,
    keyboard: true,
    pageSteps: 8,
    tooltips: [false, false],
    pips: {
      mode: 'count',
      density: 2,
      values: 11,
      stepped: true
    }
  };

  ngOnInit() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
  }

  constructor() {
    this.index = [];

    let i = this.min;
    let j = 0;
    while (i < this.max) {
      i = (j + 1) * (this.max - this.min) / (this.dots - 1);
      this.index[j] = this.min + i;
      j++;
    }
  }

/*   onChange() {
    alert("range cambiato: " + this.range);
  } */

}
