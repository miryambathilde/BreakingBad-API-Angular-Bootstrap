import { Component, OnInit } from '@angular/core';
import { Character } from "src/app/interfaces/character.interface";
import { CharacterService } from "src/app/services/character.service";

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  characters: Character[] = [];
  constructor(private characterService: CharacterService) {}

  async ngOnInit(): Promise<any> {
    this.characters = await this.characterService.getAll();
  }

}
