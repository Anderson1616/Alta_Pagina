import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface CartItem {
  id: string;
  title: string;
  description: string;
  price?: number;
  quantity: number;
}

@Injectable({ providedIn: "root" })
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  addItem(item: Omit<CartItem, "quantity">): void {
    const items = this.itemsSubject.value;
    const existing = items.find((existingItem) => existingItem.id === item.id);
    if (existing) {
      existing.quantity += 1;
      this.itemsSubject.next([...items]);
      return;
    }
    this.itemsSubject.next([...items, { ...item, quantity: 1 }]);
  }

  removeItem(id: string): void {
    this.itemsSubject.next(this.itemsSubject.value.filter((item) => item.id !== id));
  }

  clear(): void {
    this.itemsSubject.next([]);
  }
}
