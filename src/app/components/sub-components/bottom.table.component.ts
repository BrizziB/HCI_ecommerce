import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-bottom-table',
    templateUrl: './bottom.table.component.html',
    styleUrls: ['./bottom.table.component.scss']
})


export class BottomTableComponent implements OnInit {
    // prova di componente riusabile passandogli parametri differenti da onInit del componente padre

    title: String;
    subTitle: String;
    serviceEndPoint: String; // servirà per dirgli che servizio usare, sarè localhost:3030/products/"serviceEndPoint"



}
