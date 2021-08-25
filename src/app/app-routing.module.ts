import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from "./components/c404/c404.component";
import { ListaPersonajesComponent } from "./components/lista-personajes/lista-personajes.component";
import { PersonajeComponent } from "./components/personaje/personaje.component";

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/home'},
  { path: 'home', component: ListaPersonajesComponent },
  { path: 'character/:idcharacter', component: PersonajeComponent },
  { path: '**', component: C404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
