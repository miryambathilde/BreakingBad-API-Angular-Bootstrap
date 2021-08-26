import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private activedRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<any> {
    //debo discenir entre ruta activa y ruta no activa //
    this.activedRoute.params.subscribe(async params => {
      // si hay ruta activa cargo la busqueda //
      if (params.name) {
        this.characters = await this.characterService.getByName(params.name);
        // si no ruta activa, cargo todos los personajes //
      } else {
        this.characters = await this.characterService.getAll();
      }
    });
  }
}
