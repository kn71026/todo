import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ItemService } from './item.service';

export interface Item{
  id: number;
  title: string;
  description: string;
  done: boolean;
  modified: number;
}

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  addItem(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) =>{
      if (items){
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }else{
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });

  }

  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  updateItem(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) =>{
      if (!items || items.length === 0){
        return null;
      }
    //   const itemIndex = this.items.findIndex(item => item.id === newValues.id);
    // this.items[itemIndex] = newValues;
      let newItems: Item[] = [];

      for (let i of items){
        if (i.id === item.id ){
          newItems.push(item);
        }else{
          newItems.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  deleteItem(id: number): Promise<Item>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) =>{
      if (!items || items.length === 0){
        return null;
      }
      console.log(typeof(items));
      let toKeep: Item[] = [];
      for (let i of items){
        if (i.id !== id ){
          toKeep.push(i);
        }
    }
      return this.storage.set(ITEMS_KEY, toKeep);
  });
  }
}
