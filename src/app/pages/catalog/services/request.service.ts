import { effect, Injectable, signal } from '@angular/core';
import { ItemInterface } from '../models/item.model';
import Client from 'storyblok-js-client';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private sbClient = new Client({
    accessToken: 'sUgJVvoI7vf02ZPfQWW5SQtt', // Add your token here
    // cv: 1734821510,
  });

  #items = signal<ItemInterface[]>([]);

  items = this.#items.asReadonly();

  async loadItems(): Promise<ItemInterface[]> {
    try {
      const response = await this.sbClient.getStory('180hb', {});
      const items = response.data.story.content['body'];

      // Обновляем состояние
      this.#items.set(items);

      return items;
    } catch (error) {
      console.error('Error loading items:', error);
      throw error;
    }
  }
}
