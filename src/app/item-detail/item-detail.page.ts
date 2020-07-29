import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService, Item } from '../services/storage.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

    item: Item;
    callback;
    id: number;
    title = '';
    des = '';
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private storageService: StorageService,
    ) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.callback = this.router.getCurrentNavigation().extras.state;
      }
    }

    ngOnInit() {

      this.id = Number(this.route.snapshot.paramMap.get('id'));

      this.storageService.getItemsById(this.id).then((item) => {
        this.item = item;
        console.log(this.item);
        this.title = this.item.title;
        this.des = this.item.description;

      });
    }

    goBack(){
      this.router.navigate(['/home']);
    }

    loadItems(){
      this.storageService.getItems().then(items => {

      });
    }

    updateItem(){
      this.item.title = this.title;
      this.item.description = this.des;
      this.item.modified = Date.now() ;

      this.storageService.updateItem(this.item).then(item =>{
        this.callback();
      });
      this.goBack();
    }

  }
