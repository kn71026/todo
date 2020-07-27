import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { ItemDetailPage  } from '../item-detail/item-detail.page';
import {OverlayEventDetail} from '@ionic/core';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../services/storage.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage{
  // items: Array<any>;
  // filterCondition: TodoStatus | undefined;
  items: Item[] = [];
  newItem: Item = <Item>{};

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
    private storage: Storage,
    private storageService: StorageService,
    private toastctrl: ToastController ) {
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(){
      this.loadItems();
    }
  // async addItem(){
  //   const addModal = await this.modalCtrl.create({
  //     component: AddItemPage,
  //   });
  //   addModal.onDidDismiss().then((item: OverlayEventDetail) => {
  //     if (item) {
  //       console.log(item.data);
  //       this.saveItem(item.data);
  //     }
  // });
  //   return await addModal.present();
  // }

  // saveItem(item){
  //   this.items.push(item);
  //   this.dataService.save(item);
  // }


  // viewItem(item){
  //   const navigationExtras: NavigationExtras = {
  //     state : {
  //     ti: item.title,
  //     des: item.description
  //   }};
  //   // console.log(item.description);
  //   // this.router.navigate(['/item-detail'], navigationExtras);
  //   this.navCtrl.navigateForward(['/item-detail/'], navigationExtras);
  // }
  Delete(item){
    this.items.splice(this.items.indexOf(item), 1);
  }

  markAll(done: boolean) {
    this.items.forEach( item => { item.done = true; });
  }
  clearAll(done: boolean) {
    this.items.forEach( item => { item.done = false; });
  }

  // updateItem(item: Item){
  //   item.modified = Date.now();

  //   this.storageService.updateItem(item).then(item =>{
  //     this.showToast('Item update!');
  //     this.loadItems();
  //   }
  // }
  updateItem(){}



  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  DeleteItem(item: Item){
      this.storageService.deleteItem(item.id).then(item =>{
        this.showToast('Item remove!');
        this.loadItems();
      })
  }


  async showToast(msg){
    const toast = await this.toastctrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  nav(){
    this.navCtrl.navigateForward('/add-item', {
      state:
        () => {
          alert('驚！ 靖軒太可愛!!!💕');
          this.loadItems();
      }
    });
  }

}
