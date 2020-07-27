import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
    item: any;
    editItemForm: FormGroup;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      public formBuilder: FormBuilder,
      private itemService: ItemService
    ) { }

    ngOnInit() {
      this.route.params.subscribe(
        data => {
          this.item = this.itemService.getItemById(data.id)[0];
          // if item is undefined, go back to home
          if (!this.item){
            this.goBack();
          } else{
            this.editItemForm = this.formBuilder.group({
              title: new FormControl(this.item.title, Validators.required),
              description: new FormControl(this.item.description, Validators.required)
            });
          }
        }
      ); }

    goBack(){
      this.router.navigate(['/home']);
    }

    updateItem(value){
      let newValues = {
        id: this.item.id,
        title: value.title,
        description: value.description
      };
      this.itemService.updateItem(newValues);
      this.goBack();
    }

  }
