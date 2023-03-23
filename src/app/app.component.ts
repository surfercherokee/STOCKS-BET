import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : any = 'STOCKS-BET';

  public selectionCounter!: number;
  public addedStock : any;

  stocks = [
     {tickerCode: 'AMZN', companyName: 'Amz Co. Birchwood name', imgUrl: 'https://logo-logos.com/2016/12/Amazon_logo.png'},
     {tickerCode: 'VITA', companyName: 'Vitamix', imgUrl: 'https://logo-logos.com/vitamix-logo-1031.html'},
     {tickerCode: 'PAINT',companyName: 'Paint it up', imgUrl: 'https://img.freepik.com/free-vector/paint-stylish-text-effect-editable-modern-lettering-typography-font-style_314614-1683.jpg?size=626&ext=jpg'}
  ];
}
