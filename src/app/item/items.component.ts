import {Component, OnInit, ViewContainerRef} from '@angular/core'
import {ModalDialogOptions, ModalDialogService} from "@nativescript/angular";

import {Item} from './item'
import {ItemService} from './item.service'
import {ItemDetailComponent} from "./item-detail.component";


@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>



  constructor(
    private modalService: ModalDialogService,
    private vcRef: ViewContainerRef,
    private itemService: ItemService
  ) {
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }


  /**
   * ************************************************************************
   * Open detail modal
   */

  /**
   *
   */
  openDetailModal(itemId: number): void {

    this.createDetailModal(itemId).then(result => {

      console.log('MODAL CLOSED:', result);

    }).catch(error => console.log('ERROR', error));
  }

  /**
   *
   * @param itemId
   */
  private createDetailModal(itemId: number): Promise<any> {
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: itemId,
      fullscreen: true,
    };

    // showModal returns a promise with the received parameters from the modal page
    return this.modalService.showModal(ItemDetailComponent, options);
  }
}
