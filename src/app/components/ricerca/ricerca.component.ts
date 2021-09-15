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


  openVid(id:string){
    this.vidModal=true
    this.selectedMatch = this.partite.find(el=>el.title==id)
  }
  closeVid(){
    this.vidModal=false
  }

}
