import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Menu, MenuItem } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-order-summary-component',
  templateUrl: './order-summary-component.component.html',
  styleUrls: ['./order-summary-component.component.scss']
})
export class OrderSummaryComponentComponent implements OnInit {
  
  @Input() item: MenuItem;
  orderSummary:Menu[]=[];
  @Input()infoModal:any; 
  
  
  constructor(){
    
   }
   ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    console.log( changes.infoModal)
    if(changes.item && changes.item.currentValue != undefined && changes.item.currentValue.Modal != true){
      this.orderSummary.push(changes.item.currentValue)
    }if (changes.infoModal && changes.infoModal.currentValue != undefined && changes.infoModal.currentValue.Modal === true){
      console.log( changes.infoModal)
      this.orderSummary.push(changes.infoModal.currentValue)
      console.log(this.orderSummary)
     } 
    /*
    }*/
   

   }


  ngOnInit(): void { 
   
  }
  
   
   

}
