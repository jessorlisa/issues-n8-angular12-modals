import {Component, OnInit} from '@angular/core'
import {ModalDialogParams} from '@nativescript/angular';

import {Item} from './item'
import {ItemService} from './item.service'

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
}
