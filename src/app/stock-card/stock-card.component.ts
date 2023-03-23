import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {

  @Input() title  = "Default title";
  @Input() companyName = "<No company name";

  imageUrl='';
  @Input()
    set imgUrl(imageUrl : string){
    this.imageUrl = imageUrl || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftutorialsdojo.com%2F&psig=AOvVaw336S7MtXUJXq3-vo4t8oKo&ust=1679447349590000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjmlYfr6_0CFQAAAAAdAAAAABAE';
  }
  getImgUrl() : string { return this.imageUrl;}

  @Output() addToList = new EventEmitter<any>();

  background_color = 'white';

  selected: boolean = false;

  buttonLabel = 'bet';

  selectCard(){
    this.selected = !this.selected;
    this.background_color = this.selected ? 'lightGreen' : 'white';
    console.log('this.title: ' + this.title);
    this.buttonLabel = this.selected ? 'Remove bet' : 'Bet';
    this.addToList.emit({title : this.title, selected : this.selected});
  
  }

}
