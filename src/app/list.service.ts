import { Injectable } from '@angular/core';

import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  items: Item[] = [];

  constructor() { }
  addItems(item: Item){
    this.items.push(item);
}

deleteItem(index: number) {
  this.items.splice(index, 1)
}

}
