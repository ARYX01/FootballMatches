import { Component } from '@angular/core';
import {ApiService, Response} from "../api.service";

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styles: []
})
export class RicercaComponent {

  partite:Response[]=[]

  selectedMatch:Response|undefined
  vidModal:boolean=false

  constructor(private service:ApiService) { }

  findByTeam(team:string){
    this.service.getSquadra(team).subscribe(res=>this.partite=res)
  }

  findByLeague(league:string){
    this.service.getCompetizione(league).subscribe(res=>this.partite=res)
  }

  findByDate(date:string){
    console.log(date)
    this.service.getData(date).subscribe(res=>this.partite=res)
  }




  openVid(id:string){
    this.vidModal=true
    this.selectedMatch = this.partite.find(el=>el.title==id)
  }
  closeVid(){
    this.vidModal=false
  }

}
