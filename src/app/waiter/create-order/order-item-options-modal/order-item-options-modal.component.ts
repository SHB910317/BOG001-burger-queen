import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Menu } from 'src/app/interfaces/menu';
import { FormBuilder,FormGroup} from '@angular/forms';
//import { createSocket } from 'dgram';

@Component({
  selector: 'app-order-item-options-modal',
  templateUrl: './order-item-options-modal.component.html',
  styleUrls: ['./order-item-options-modal.component.scss']
})
export class OrderItemOptionsModalComponent implements OnInit {

  data:Menu;
  modalSelections:any = {};
  modalForm:FormGroup;
  

@Output() close = new EventEmitter<string>();
@Output() sendModalInfo = new EventEmitter<any>();

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
  onSubmit(){
    let infoModalTypeBurguer = this.modalForm.value
    this.sendModalInfo.emit(infoModalTypeBurguer);
  

    console.log(infoModalTypeBurguer)
  }

  closeModal(value:string){
    this.close.emit(value);
    console.log(value)
  }
  
 
  
}
