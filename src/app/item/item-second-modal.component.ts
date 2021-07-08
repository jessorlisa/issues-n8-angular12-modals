import {Component, OnInit} from '@angular/core';
import {ModalDialogParams} from '@nativescript/angular';

@Component({
  selector: 'ns-item-second-modal',
  templateUrl: './item-second-modal.component.html',
})
export class ItemSecondModalComponent implements OnInit {

  itemName: string;

  constructor(
    private params: ModalDialogParams
  ) {
    this.itemName = params.context;
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.params.closeCallback({
      name: this.itemName
    });
  }
}
