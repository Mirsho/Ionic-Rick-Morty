import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceService {
  apiURL: string = "https://rickandmortyapi.com/api/character/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getCharacters(): Observable<any>{
    return this.httpClient.get<any>(this.apiURL);
  }

  getCharacter(id: number){
    return this.httpClient.get<any>(this.apiURL+id);
  }
}
