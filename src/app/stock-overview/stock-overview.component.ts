import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-overview',
  templateUrl: './stock-overview.component.html',
  styleUrls: ['./stock-overview.component.css']
})
export class StockOverviewComponent {

  faveStocks = [];
  selecteNum = 0;

  @Input('addedStock')
  set addedStock(selectedStock : any){
    console.log('addedStock : ' + JSON.stringify(selectedStock));
    if(selectedStock){
      let stockIndex = this.faveStocks.indexOf((selectedStock.title) as never);
      if(stockIndex > -1){
        this.faveStocks.splice(stockIndex, 1) as any;
      } else{
        this.faveStocks.push((selectedStock.title) as never);
      }
    }
  } 

  getFaveStocks(){
    return(JSON.stringify(this.faveStocks));
  }

}
