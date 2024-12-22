import { Injectable } from '@angular/core';
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

  async loadItems(): Promise<any> {
    const data = await this.sbClient
      .getStory('180hb', {})
      .then((res) => res.data);
    // const data = await this.h

    console.log(data.story.content['body']);

    return data.story.content['body'];
  }
}
