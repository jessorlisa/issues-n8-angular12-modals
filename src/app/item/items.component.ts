import {Component, OnInit, ViewContainerRef} from '@angular/core'
import {NativeDialogConfig, NativeDialogService} from "@nativescript/angular";

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
    private nativeDialogService: NativeDialogService,
    private vcRef: ViewContainerRef,
    private itemService: ItemService
  ) {
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }


  /**
   * ************************************************************************
   * Open detail dialog (modal)
   */

  /**
   *
   */
  openDetailModal(itemId: number): void {

    const options: NativeDialogConfig = {
      viewContainerRef: this.vcRef, // necessary for iOS if another modal should be opened from this modal
      data: {
        itemId: itemId
      },
      nativeOptions: {
        fullscreen: true
      }
    };

    this.nativeDialogService.open(ItemDetailComponent, options)
      .afterClosed()
      .subscribe((result) => {
        console.log('MODAL CLOSED:', result);
      });
  }
}
