import { Component, input } from '@angular/core';
import { ItemInterface } from '../../models/item.model';
import { ScrollFadeInDirective } from '../../../../share/directives/scroll-fade-in.directive';
import { fadeInAnimation } from '../../../../share/animation/fade-in.animation';
@Component({
  selector: 'app-item',
  imports: [ScrollFadeInDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  animations: [fadeInAnimation],
})
export class ItemComponent {
  item = input<ItemInterface>();
}
