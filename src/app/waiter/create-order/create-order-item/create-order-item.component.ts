import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-create-order-item',
  templateUrl: './create-order-item.component.html',
  styleUrls: ['./create-order-item.component.scss']
})
export class CreateOrderItemComponent implements OnInit {
  data:Menu;
  modalBurguer: boolean;

  @Input()typeItem: string; // el input es para pasar datos del papa al hijo. Estamos llamando Type
  @Output() stateModalBurguer = new EventEmitter<boolean>();



  constructor(

    private dataService: DataService,
    private router:Router
  
  ) { }

  ngOnInit(): void {
    
    /*llamamos al servicio dataService y utilizamos subscribe (para suscribirnos a él) y tener la data disponible*/
    this.dataService.getData()
    .subscribe((res:Menu) => {
      this.data =res;
      //data.menu se esta trayendo la data del json  
    });
  }

  onSubmit(value) {
    // Process checkout data here
    this.modalBurguer = value;
    console.log(this.modalBurguer);
    this.stateModalBurguer.emit(this.modalBurguer)
    
    }

}
