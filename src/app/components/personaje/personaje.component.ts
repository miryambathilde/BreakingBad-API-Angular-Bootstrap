import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Character } from "src/app/interfaces/character.interface";
import { CharacterService } from "src/app/services/character.service";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  character: Character | undefined;

  constructor(
    private activedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe( async params => {
      //params.idCharacter es el dato que recibo de la ruta
      const result  = await this.characterService.getById(Number(params.idcharacter))
      this.character = result[0];
    })
  }
}
