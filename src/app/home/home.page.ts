import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage{

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
    private storage: Storage,
    private storageService: StorageService,
    private ToastCtr: ToastController ) {
    }

  items: Item[] = [];
  newItem: Item = {} as Item;

  newName: string;

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(){
      this.loadItems();
    }

  markAll(done: boolean) {
    this.items.forEach( item => { item.done = true; });
  }
  clearAll(done: boolean) {
    this.items.forEach( item => { item.done = false; });
  }


  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  DeleteItem(item: Item){
      this.storageService.deleteItem(item.id).then(item => {
        this.showToast('Item remove!');
        this.loadItems();
      });
  }


  async showToast(msg){
    const toast = await this.ToastCtr.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  nav2add(){
    this.navCtrl.navigateForward('/add-item', {
      state:
        () => {
          this.loadItems();
      }
    });
  }

  nav2detail(itemId){
    this.navCtrl.navigateForward('/item-detail/' + itemId , {
      state:
        () => {
          this.loadItems();
        }
    });
  }


}
