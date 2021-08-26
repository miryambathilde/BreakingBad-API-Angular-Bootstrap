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
  mostrarPaginacion: boolean = true;
  pagination: any[] = [];

  constructor(

    private characterService: CharacterService,
    private activedRoute: ActivatedRoute

  ) {}

  async ngOnInit() {

    const all = await this.characterService.getAll()
    const numPages = Math.ceil(all.length / 10);
    this.pagination = new Array(numPages);
    //console.log(this.pagination)

    //debo discenir entre ruta activa y ruta no activa //
    this.activedRoute.params.subscribe(async params => {
      // si hay ruta activa cargo la busqueda //
      if (params.name) {
        this.characters = await this.characterService.getByName(params.name);
        this.mostrarPaginacion = false;
        // si no ruta activa, cargo todos los personajes //
      } else if (params.page) {
        this.characters = await this.characterService.getByPage(Number(params.page));
        this.mostrarPaginacion = true;
      } else {
        this.characters = await this.characterService.getByPage();
        this.mostrarPaginacion = true;
      }
    });

    // vamos a ver como recogermos queryParams para

    this.activedRoute.queryParams.subscribe(async queryParams => {
      // si tenemos categoria seleccionada, mostramos los personajes de esa categoría //
      if (queryParams.category) {
        this.characters = await this.characterService.getByCategory(queryParams.category);
        this.mostrarPaginacion = false;
      }
      // si  no tenemos categoría seleccionada, cargará todos los personakes //
      else {
        this.characters = await this.characterService.getByPage();
        this.mostrarPaginacion = true;
      }
      //console.log(queryParams);
    });
  }
}
