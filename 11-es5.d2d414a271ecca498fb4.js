function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return v}));var o=n("ofXK"),i=n("TEn/"),c=n("3Pt+"),r=n("tyNb"),a=n("mrSG"),l=n("fXoL"),s=n("e8h1"),b=n("n90K"),d=function(t){return{done:t}};function u(t,e){if(1&t){var n=l.Nb();l.Mb(0,"ion-item"),l.Mb(1,"ion-checkbox",13),l.Ub("ngModelChange",(function(t){return l.ec(n),e.$implicit.done=t})),l.Lb(),l.Mb(2,"ion-label",14),l.Ub("click",(function(){l.ec(n);var t=e.$implicit;return l.Wb().nav2detail(t.id)})),l.ic(3),l.Lb(),l.Mb(4,"p",15),l.ic(5),l.Xb(6,"date"),l.Lb(),l.Mb(7,"ion-button",16),l.Ub("click",(function(){l.ec(n);var t=e.$implicit;return l.Wb().DeleteItem(t)})),l.ic(8,"delete"),l.Lb(),l.Lb()}if(2&t){var o=e.$implicit;l.zb(1),l.bc("ngModel",o.done)("checked",o.done),l.zb(1),l.bc("ngClass",l.cc(9,d,o.done)),l.zb(1),l.kc(" ",o.title,"\xa0\xa0",o.description," "),l.zb(2),l.jc(" ",l.Yb(6,6,o.modified,"short")," ")}}var f,m,p,g=[{path:"",component:(f=function(){function t(e,n,o,i,c,r){_classCallCheck(this,t),this.navCtrl=e,this.modalCtrl=n,this.router=o,this.storage=i,this.storageService=c,this.ToastCtr=r,this.items=[],this.newItem={}}return _createClass(t,[{key:"ngOnInit",value:function(){this.loadItems()}},{key:"markAll",value:function(){this.items.forEach((function(t){t.done=!0}))}},{key:"clearAll",value:function(){this.items.forEach((function(t){t.done=!1}))}},{key:"loadItems",value:function(){var t=this;this.storageService.getItems().then((function(e){t.items=e}))}},{key:"DeleteItem",value:function(t){var e=this;this.storageService.deleteItem(t.id).then((function(t){e.showToast("Item remove!"),e.loadItems()}))}},{key:"showToast",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.ToastCtr.create({message:t,duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"nav2add",value:function(){var t=this;this.navCtrl.navigateForward("/add-item",{state:function(){t.loadItems()}})}},{key:"nav2detail",value:function(t){var e=this;this.navCtrl.navigateForward("/item-detail/"+t,{state:function(){e.loadItems()}})}}]),t}(),f.\u0275fac=function(t){return new(t||f)(l.Jb(i.v),l.Jb(i.u),l.Jb(r.g),l.Jb(s.b),l.Jb(b.a),l.Jb(i.y))},f.\u0275cmp=l.Db({type:f,selectors:[["app-home"]],decls:21,vars:3,consts:[[3,"translucent"],["color","secondary"],[1,"title"],[3,"fullscreen"],[1,"ion-text-center"],[1,"my_title"],["color","primary"],[3,"click"],["slot","icon-only","name","add-circle"],[4,"ngFor","ngForOf"],[1,"button_block"],["color","success",1,"my_button",3,"click"],["color","danger",1,"my_button",3,"click"],["color","primary","checked","","slot","start",3,"ngModel","checked","ngModelChange"],[1,"my_label",3,"ngClass","click"],[1,"my_date"],["slot","end","color","danger",3,"click"]],template:function(t,e){1&t&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar",1),l.Mb(2,"ion-title",2),l.ic(3,"Todo!"),l.Lb(),l.Lb(),l.Lb(),l.Mb(4,"ion-content",3),l.Mb(5,"div",4),l.Mb(6,"div",5),l.Mb(7,"ion-text",6),l.Mb(8,"h2"),l.ic(9," Add something todo! "),l.Lb(),l.Lb(),l.Mb(10,"ion-button",7),l.Ub("click",(function(){return e.nav2add()})),l.Kb(11,"ion-icon",8),l.Lb(),l.Lb(),l.Mb(12,"ion-list"),l.hc(13,u,9,11,"ion-item",9),l.Lb(),l.Lb(),l.Mb(14,"div",10),l.Mb(15,"ion-button",11),l.Ub("click",(function(){return e.markAll()})),l.Mb(16,"ion-label"),l.ic(17,"complete all"),l.Lb(),l.Lb(),l.Mb(18,"ion-button",12),l.Ub("click",(function(){return e.clearAll()})),l.Mb(19,"ion-label"),l.ic(20,"uncompleted all"),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.bc("translucent",!0),l.zb(4),l.bc("fullscreen",!0),l.zb(9),l.bc("ngForOf",e.items))},directives:[i.i,i.r,i.q,i.h,i.p,i.e,i.j,i.n,o.j,i.m,i.l,i.g,i.a,c.f,c.g,o.i],pipes:[o.d],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.ion-text-center[_ngcontent-%COMP%]{border:1px solid #85e0f7;border-radius:20px;padding:10px;margin-top:10%;margin-left:20%;margin-right:20%;box-shadow:0 0 9px #8de6f1}.title[_ngcontent-%COMP%]{margin-left:50%;font-size:40px;padding:10px}.my_title[_ngcontent-%COMP%]{display:flex;padding-right:20px;padding-left:20px;justify-content:space-between;border-bottom:1px solid rgba(101,198,223,.623)}.my_label[_ngcontent-%COMP%]{padding:10px}.my_label[_ngcontent-%COMP%]:hover{cursor:pointer;padding:10px}.done[_ngcontent-%COMP%]{color:#d9d9d9;text-decoration:line-through}.button_block[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.my_button[_ngcontent-%COMP%]{margin:30px}.my_date[_ngcontent-%COMP%]{font-size:12px;padding-bottom:0;margin-bottom:0;color:grey}"]}),f)}],h=((p=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:p}),p.\u0275inj=l.Gb({factory:function(t){return new(t||p)},imports:[[r.i.forChild(g)],r.i]}),p),v=((m=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:m}),m.\u0275inj=l.Gb({factory:function(t){return new(t||m)},imports:[[o.b,c.c,i.s,h]]}),m)}}]);