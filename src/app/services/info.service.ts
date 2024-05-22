import { Injectable } from '@angular/core';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  url = 'https://6619804c125e9bb9f29a2581.mockapi.io/news'

  constructor() { }

  async getPosts(): Promise<Post[]> {
    const resposne = await fetch(this.url)
    return await resposne.json()
  }

  async getPostById(id: number): Promise<Post> {
    const resposne = await fetch(`${this.url}/${id}`)
    return await resposne.json()
  }

}
