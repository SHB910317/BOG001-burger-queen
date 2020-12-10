import { Component, OnInit } from '@angular/core';
//import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';
import { ItemPedido } from 'src/app/interfaces/menu';
//import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  numberTable: string;
  nameDiner: string;
  type: string;
  modalBurguer:boolean;
  showModal: boolean = false;
  receivedOrder:ItemPedido;
 
 // data:Menu;

  /* aquí obtenemos el JSON desde la url de github usando raw, luego usamos subscribe y se obtiene la respuesta (res de tipo any) y 
  la guardamos en una constante llamada data */

  constructor(
    //private dataService: DataService,
    private route: ActivatedRoute,
    ){    
  }

  ngOnInit(): void {
    this.numberTable = this.route.snapshot.paramMap.get('selectTables');
    this.nameDiner = this.route.snapshot.paramMap.get('name');
    this.type = this.route.snapshot.paramMap.get('type');
  }

  receiveveStateModalBurguer(stateModalBurguer){
   this.showModal = stateModalBurguer;
  }
  receiveItemOrder(pedido:ItemPedido){
    this.receivedOrder = pedido;
    console.log(this.receivedOrder)

  }

  receiveCloseModal(value){
    this.showModal = false;
  }
  
}

