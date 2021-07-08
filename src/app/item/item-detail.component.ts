import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogOptions, ModalDialogParams, ModalDialogService} from '@nativescript/angular';

import {Item} from './item';
import {ItemService} from './item.service';
import {ItemSecondModalComponent} from "~/app/item/item-second-modal.component";

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {

  itemId: number;
  item: Item;

  iterations: number[];

  constructor(
    private params: ModalDialogParams,
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef,
    private itemService: ItemService
  ) {
    this.itemId = params.context;

    this.iterations = Array(100).fill(0).map((x, i) => i+1);
  }

  ngOnInit(): void {

    this.item = this.itemService.getItem(this.itemId);
  }

  closeModal(): void {
    this.params.closeCallback({
      name: this.item.name
    });
  }

  /**
   * ************************************************************************
   * Open 2nd modal
   */

  /**
   *
   */
  openSecondModal(): void {

    this.createSecondModal().then(result => {

      console.log('MODAL (2nd) CLOSED:', result);

    }).catch(error => console.log('ERROR', error));
  }

  /**
   *
   */
  private createSecondModal(): Promise<any> {
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: this.item.name,
      fullscreen: true,
    };

    // showModal returns a promise with the received parameters from the modal page
    return this.modalService.showModal(ItemSecondModalComponent, options);
  }
}
