import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { element } from 'protractor';
import { Menu, MenuItem } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-order-summary-component',
  templateUrl: './order-summary-component.component.html',
  styleUrls: ['./order-summary-component.component.scss']
})
export class OrderSummaryComponentComponent implements OnInit {
  
  @Input() item: MenuItem;
  orderSummary:MenuItem[]=[];// El orderSummary es de tipo MenuItem que es una interfaz donde hay un objetos con varias propiedades
 // orderSummary:any=[];
  @Input()infoModal:any; 
  productPrice:number;

  constructor(){
    
   }
   ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    console.log( changes.infoModal)

    if(changes.item && changes.item.currentValue != undefined && changes.item.currentValue.Modal != true){
    
      console.log('idEntrante',changes.item.currentValue.id)
      const product = this.orderSummary.find(element => element.id === changes.item.currentValue.id)
      if(!product){
        changes.item.currentValue.quantity = 1;
        console.log('objeto a pushear',changes.item.currentValue)
        this.orderSummary.push(changes.item.currentValue)
      }else{
        product.quantity++
        this.productPrice = product.quantity*product.price;
      }      
    }else if(changes.infoModal && changes.infoModal.currentValue != undefined){
      console.log( 'changes.infoModal',changes.infoModal)
      this.orderSummary.push(changes.infoModal.currentValue)
      console.log(this.orderSummary)
     }else{
       console.log('No pusheó por tanto no pintó')
     }
     
     
   

   }

  ngOnInit(): void { 
  
   
  }
  
   

}
