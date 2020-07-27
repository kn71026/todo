import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { ItemDetailPage  } from '../item-detail/item-detail.page';
import {OverlayEventDetail} from '@ionic/core';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage{
  items: Array<any>;
  // filterCondition: TodoStatus | undefined;


  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
    public itemService: ItemService ) {}

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit(){
      this.items = this.itemService.getItems();
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


  viewItem(item){
    const navigationExtras: NavigationExtras = {
      state : {
      ti: item.title,
      des: item.description
    }};
    // console.log(item.description);
    // this.router.navigate(['/item-detail'], navigationExtras);
    this.navCtrl.navigateForward(['/item-detail/'], navigationExtras);
  }
  Delete(item){
    this.items.splice(this.items.indexOf(item), 1);
  }

  markAll(done: boolean) {
    this.items.forEach( item => { item.done = true; });
  }
  clearAll(done: boolean) {
    this.items.forEach( item => { item.done = false; });
  }


}
