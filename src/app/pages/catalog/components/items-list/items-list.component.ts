import { Component, input } from '@angular/core';
import { ItemInterface } from '../../models/item.model';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items-list',
  imports: [ItemComponent],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss',
})
export class ItemsListComponent {
  items = input<ItemInterface[]>([]);
}
