import { Component, inject, type OnInit } from '@angular/core';
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
export class CatalogComponent implements OnInit {
  #requestService = inject(RequestService);

  items = this.#requestService.items;

  async ngOnInit() {
    await this.#requestService.loadItems();
  }
}
