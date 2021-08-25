import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from "./components/lista-personajes/lista-personajes.component";
import { PersonajeComponent } from "./components/personaje/personaje.component";

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/home'},
  { path: 'home', component: ListaPersonajesComponent },
  { path: 'character/:id', component: PersonajeComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
