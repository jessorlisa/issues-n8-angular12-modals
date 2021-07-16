import {Component, Inject, OnInit, ViewContainerRef} from '@angular/core';

import {NATIVE_DIALOG_DATA, NativeDialogConfig, NativeDialogRef, NativeDialogService} from "@nativescript/angular";

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
    @Inject(NATIVE_DIALOG_DATA) private data: { [key: string]: any },
    private nativeDialogService: NativeDialogService,
    private nativeDialogRef: NativeDialogRef<ItemDetailComponent>,
    private vcRef: ViewContainerRef,
    private itemService: ItemService
  ) {

    this.itemId = this.data.itemId;

    this.iterations = Array(100).fill(0).map((x, i) => i + 1);
  }

  ngOnInit(): void {

    this.item = this.itemService.getItem(this.itemId);
  }

  closeModal(): void {
    this.nativeDialogRef.close({
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
    const options: NativeDialogConfig = {
      viewContainerRef: this.vcRef, // necessary for iOS if another modal should be opened from this modal
      data: {
        itemName: this.item.name
      },
      nativeOptions: {
        fullscreen: true
      }
    };

    this.nativeDialogService.open(ItemSecondModalComponent, options)
      .afterClosed()
      .subscribe((result) => {
        console.log('MODAL (2nd) CLOSED:', result);
      });
  }
}
