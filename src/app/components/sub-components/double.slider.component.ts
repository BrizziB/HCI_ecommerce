import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NouisliderModule } from 'ng2-nouislider';

@Component({
  selector: 'app-double-slider',
  templateUrl: './double.slider.component.html',
  styleUrls: ['./double.slider.component.scss']
})


export class DoubleSliderComponent implements OnInit { // queste variabili saranno poi passate tramite costruttore eh
  @ViewChild('slider', { read: ElementRef }) sliderEl: ElementRef;
  @ViewChild('slider') slider;
  flag = true;
  index: number[];
  range = [80.0, 120.0];
  dots = 9;
  config: any = {
    behaviour: 'tap-drag',
    connect: true,
    keyboard: true,
    pageSteps: 8,
    tooltips: [false, false],
    step: 10,
    start: [0.0, 100.0],

    range: {
      min: 0.0,
      max: 200.0
    }
  };

  ngOnInit() {

  }

  constructor(private cdRef: ChangeDetectorRef) {
    this.index = [];

    let i = this.config.range.min;
    let j = 0;
    while (i < this.config.range.max) {
      i = (j + 1) * (this.config.range.max - this.config.range.min) / (this.dots - 1);
      this.index[j] = this.config.range.min + i;
      j++;
    }
  }

  minModified(num) { // un po' di roba brutta per far funzionare bene le due handles
    if (this.range[0] <= 0) { //controllo che non "esca" da sinistra
      this.range[0] = 0;
    }
    if (this.range[0] <= this.range[1] - this.config.step) { //controllo che non superi l'handle del limite massimo
      this.range[0] = this.range[0] + (num * this.config.step);

    } else if (num === 1) {
      this.range[0] = this.range[0];
    } else {
      this.range[0] = this.range[0] + (num * this.config.step);
    }

    this.reCreate();
  }

  maxModified(num) {

    if (this.range[1] >= this.config.range.max) {
      this.range[1] = this.config.range.max;
    }
    if (this.range[1] >= this.range[0] + this.config.step) { //controllo che non vada più in basso dell'handle del limite minimo
      this.range[1] = this.range[1] + (num * this.config.step);

    } else if (num === -1) {
      this.range[1] = this.range[1];
    } else {
      this.range[1] = this.range[1] + (num * this.config.step);
    }
    this.reCreate();
  }

  private reCreate() {
    this.slider.slider.destroy();
    this.flag = false;
    this.cdRef.detectChanges();
    this.flag = true;
    this.cdRef.detectChanges();
  }


}
