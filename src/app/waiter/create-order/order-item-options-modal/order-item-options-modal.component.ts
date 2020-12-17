import { Component, OnInit, inject, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AddItem, Menu, MenuItem, NewMenuItem } from 'src/app/interfaces/menu';
import { FormBuilder,FormGroup} from '@angular/forms';

//import { createSocket } from 'dgram';

@Component({
  selector: 'app-order-item-options-modal',
  templateUrl: './order-item-options-modal.component.html',
  styleUrls: ['./order-item-options-modal.component.scss']
})
export class OrderItemOptionsModalComponent implements OnInit {

  data:Menu;
  modalForm:FormGroup;
  newOrderBurguer:NewMenuItem;
  infoModalTypeBurguer:any;
  addition:AddItem;
  @Input()order: MenuItem;
  
  @Output() close = new EventEmitter<string>();
  @Output() sendModalInfo = new EventEmitter<NewMenuItem>();

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {   
    this.createForm();
  }

  ngOnInit(): void {

    this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
      //data.menu se esta trayendo la data del json  
    });
    
  }
  createForm(){
    this.modalForm = this.formBuilder.group({
      optionTypeBurguer:'',
      egg:false,
      cheese:false
    })
  }
  onSubmit(value:string){
    this.infoModalTypeBurguer = this.modalForm.value
    console.log(this.infoModalTypeBurguer)
    let priceAddition:number=0
    if(this.infoModalTypeBurguer.egg=== true){
      priceAddition++
    }
    if(this.infoModalTypeBurguer.cheese=== true){
      priceAddition++
    }
   
    this.newOrderBurguer = {
      id: this.order.id,
      image: this.order.image,
      name: this.order.name,
      price: this.order.price,
      option: this.infoModalTypeBurguer.optionTypeBurguer,
      Additions: {
        egg:this.infoModalTypeBurguer.egg,
        cheese:this.infoModalTypeBurguer.cheese,
        price:priceAddition
      }   
    }
    console.log('infoModalTypeBurguer',this.infoModalTypeBurguer)
    console.log('newOrderBurguer',this.newOrderBurguer)
    this.sendModalInfo.emit(this.newOrderBurguer);
    this.closeModal(value);
  }

  closeModal(value:string){
    this.close.emit(value);
    console.log(value)
  }
  
  
}
