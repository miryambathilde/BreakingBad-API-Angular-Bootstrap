import { Component, Input, OnInit } from '@angular/core';
import { Character } from "src/app/interfaces/character.interface";

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() miCharacter: Character | undefined;

  constructor() { }

  ngOnInit(): void { }

}
