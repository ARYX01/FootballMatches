import {Component, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {PartiteComponent} from "../partite/partite.component";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styles: []
})
export class RicercaComponent {

  @ViewChild(PartiteComponent) child: PartiteComponent | undefined

  constructor(private service:ApiService) { }

  findByTeam(team:string){
    this.service.getSquadra(team).subscribe(res=>this.child?.setPartite(res))
  }

  findByLeague(league:string){
    this.service.getCompetizione(league).subscribe(res=>this.child?.setPartite(res))
  }

  findByDate(date:string){
    this.service.getData(date).subscribe(res=>this.child?.setPartite(res))
  }

}
