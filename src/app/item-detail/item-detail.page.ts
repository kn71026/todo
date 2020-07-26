import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  title = '123';
  description = 'www';
  item: any;
  data: any;
  constructor(private route: ActivatedRoute , private router: Router) {
  //   this.route.queryParams.subscribe(params => {
  //     if (this.router.getCurrentNavigation().extras.state) {
  //     this.title = this.router.getCurrentNavigation().extras.state.item.title;
  //     this.description = this.router.getCurrentNavigation().extras.state.item.description;
  //   }
  // });
  this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.description = this.router.getCurrentNavigation().extras.state.des;
    }
  });
}

  ngOnInit() {
  }
  ionViewDidLoad(){
    //this.title = item.title;
    console.log(this.title);
  }
}
