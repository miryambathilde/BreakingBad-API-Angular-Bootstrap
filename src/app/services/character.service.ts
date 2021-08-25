import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Character } from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://www.breakingbadapi.com/api/characters/';
  }

  getAll() : Promise<Character[]> {
    // es una PROMESA y se resuelve con: then-catch o con async-await
    return this.httpClient.get<Character[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<Character[]> {
    console.log(pId);
    return this.httpClient.get<Character[]>(this.baseUrl + pId).toPromise()

  }
}
