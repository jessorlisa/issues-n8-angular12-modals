import {Component, Inject, OnInit} from '@angular/core';

import {NATIVE_DIALOG_DATA, NativeDialogRef} from '@nativescript/angular';

@Component({
  selector: 'ns-item-second-modal',
  templateUrl: './item-second-modal.component.html',
})
export class ItemSecondModalComponent implements OnInit {

  itemName: string;

  constructor(
    @Inject(NATIVE_DIALOG_DATA) private data: { [key: string]: any },
    private nativeDialogRef: NativeDialogRef<ItemSecondModalComponent>
  ) {
    this.itemName = this.data.itemName;
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.nativeDialogRef.close({
      name: this.itemName
    });
  }
}
