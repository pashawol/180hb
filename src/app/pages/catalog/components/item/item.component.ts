import { Component, input } from '@angular/core';
import { ItemInterface } from '../../models/item.model';
@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  item = input<ItemInterface>();
}
