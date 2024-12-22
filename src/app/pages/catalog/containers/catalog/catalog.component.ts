import { Component, inject, signal } from '@angular/core';
import { ItemsListComponent } from '../../components/items-list/items-list.component';
import { RequestService } from '../../services/request.service';
import { ItemInterface } from '../../models/item.model';

@Component({
  selector: 'app-catalog',
  imports: [ItemsListComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
  standalone: true,
})
export class CatalogComponent {
  items = signal<ItemInterface[]>([]);

  requestService = inject(RequestService);

  constructor() {
    this.loadItems();
  }

  private async loadItems() {
    try {
      const items = await this.requestService.loadItems();
      this.items.set(items);
      // console.log(this.items());
    } catch (error) {
      alert('An error occurred while loading items');
      console.error(error);
    }
  }
}
