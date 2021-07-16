import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule, NativeDialogModule} from '@nativescript/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemsComponent} from './item/items.component';
import {ItemDetailComponent} from './item/item-detail.component';
import {ItemSecondModalComponent} from './item/item-second-modal.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeDialogModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, ItemSecondModalComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
