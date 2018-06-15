import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  shadedScreen = false;
  isShowing = false;

  constructor(private localDataService: LocalDataService) {

  }

  ngOnInit() {
    this.localDataService.rootComponent = this;
  }

  setShowing(showing) {
    this.isShowing = showing;
  }
}
