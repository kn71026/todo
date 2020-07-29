import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService, Item } from '../services/storage.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  callback;
  public newItemForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private storageService: StorageService,
    private router: Router,
    ){
      if (this.router.getCurrentNavigation().extras.state) {
        this.callback = this.router.getCurrentNavigation().extras.state;
      }
    }
    items: Item[] = [];
    newItem: Item = {} as Item;


  ngOnInit() {
    this.newItemForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }


  // createItem(value){
  //   this.itemService.createItem(value.title, value.description);
  //   this.newItemForm.reset();
  //   this.close();
  // }

  close(){
    this.navCtrl.navigateBack('/home');
  }

  addItem(){
    const randomId = Math.random().toString(36).substr(2, 5);
    // this.newItem.title;
    this.newItem.id = Date.now();
    this.newItem.modified =  Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = ({} as Item);
      this.callback();
    });
    this.close();
  }



}
