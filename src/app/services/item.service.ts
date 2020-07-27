import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      id: '1',
      title: 'Eating',
      description: 'EatingEating',
      done: false,
    },
    {
      id: '2',
      title: 'Coding',
      description: 'CodingCoding',
      done: false,
    },
    {
      id: '3',
      title: 'playing',
      description: 'playingplaying',
      done: false,
    },
    {
      id: '4',
      title: 'sleeping',
      description: 'sleepingsleeping',
      done: true,
    },
  ];

  constructor() { }

  createItem(title, description){

    const randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      id: randomId,
      title,
      description
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    const itemIndex = this.items.findIndex(item => item.id === newValues.id);
    this.items[itemIndex] = newValues;
  }
}
