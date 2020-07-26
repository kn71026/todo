import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  title: string;
  description: string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController){}

  ngOnInit() {
  }


  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };
    this.modalCtrl.dismiss(newItem);
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
