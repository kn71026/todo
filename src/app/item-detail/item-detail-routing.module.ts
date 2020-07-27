import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ItemDetailPage } from './item-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule ],
  exports: [RouterModule],
})
export class ItemDetailPageRoutingModule {}
