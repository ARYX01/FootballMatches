import { Component, OnInit } from '@angular/core';
import {ApiService, Response} from "../api.service";

@Component({
  selector: 'app-partite',
  templateUrl: './partite.component.html',
  styles: []
})
export class PartiteComponent implements OnInit {

  partiteOggi:Response[]=[]

  selectedMatch:Response|undefined
  vidModal:boolean=false

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.service.getday().subscribe(res=>this.partiteOggi=res)
  }

  openVid(id:string){
    this.vidModal=true
    this.selectedMatch = this.partiteOggi.find(el=>el.title==id)
  }
  closeVid(){
    this.vidModal=false
  }
}


