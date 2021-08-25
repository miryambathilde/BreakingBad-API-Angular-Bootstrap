import { Component } from '@angular/core';
import { Character } from "./interfaces/character.interface";
import { CharacterService } from "./services/character.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  //Cuando cargamos el componente pedimos los datos al servicio. Inyectamos y llamamos al servicio
    this.characterService.getAll()
      .then((response: Character[]) => {
        this.characters = response;
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
