import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { ItemDetailPage  } from '../item-detail/item-detail.page';
import {OverlayEventDetail} from '@ionic/core';
import { ActivatedRoute, Router , NavigationExtras} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { ItemService } from '../services/item.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
  {title: 'hi1', description: 'test1'},
  {title: 'hi2', description: 'test2'},
  {title: 'hi3', description: 'test3'}
  ];


  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private router: Router,
    public dataService: DataService ) {
    
    }

  async addItem(){
    const addModal = await this.modalCtrl.create({
      component: AddItemPage,
    });
    addModal.onDidDismiss().then((item: OverlayEventDetail) => {
      if (item) {
        console.log(item.data);
        this.saveItem(item.data);
      }
  });
    return await addModal.present();
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(item);
  }


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
  Delete(){}


}
