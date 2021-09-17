import {Component, Input, OnInit} from '@angular/core';
import {ApiService, Response} from "../api.service";

@Component({
  selector: 'app-partite',
  templateUrl: './partite.component.html',
  styles: []
})
export class PartiteComponent implements OnInit {

  @Input() getall : boolean=true;

  partite:Response[]=[]

  selectedMatch:Response|undefined
  vidModal:boolean=false

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    if(this.getall && this.partite.length==0) {
      let today = new Date()
      let date = today.getFullYear() + "-" + ('0'+(today.getMonth() + 1)).slice(-2) + "-" + ('0' +today.getDate()).slice(-2)
      console.log(date) //test
      this.service.getData(date).subscribe(res => this.partite = res)
    }
  }

  setPartite(partite:Response[]){
    this.partite=partite
  }

  openVid(id:string){
    this.vidModal=true
    this.selectedMatch = this.partite.find(el=>el.title==id)
  }
  closeVid(){
    this.vidModal=false
  }
}


