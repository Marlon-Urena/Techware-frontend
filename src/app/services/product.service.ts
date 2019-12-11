import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      { id: 1, name: 'Mets Alonso Jersey', price: 20, size: 'Large', date: 'December 12th', photo: 'assets/img/mens/mens-alonso.png' },
      { id: 2, name: 'Brady Skeji Rangers Jersey', price: 30, size: 'X-Large', date: 'December 20th', photo: 'assets/img/mens/mens-Skjei.jpeg' },
      { id: 3, name: 'New York Giants T-Shirt', price: 10, size: 'Medium', date: 'December 28th', photo: 'assets/img/mens/mens-giants.jpg' }
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

}
