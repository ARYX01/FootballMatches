import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RicercaComponent} from "./components/ricerca/ricerca.component";
import {PartiteComponent} from "./components/partite/partite.component";
import {BetsComponent} from "./components/bets/bets.component";

const routes: Routes = [
  { path: '',   redirectTo: '/partite', pathMatch: 'full' },
  { path:"partite", component:PartiteComponent },
  { path:"ricerca", component:RicercaComponent },
  { path:"bets", component:BetsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
