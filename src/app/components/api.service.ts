import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "http://localhost:8080/api"
  constructor(private http:HttpClient) { }

  getday(){
    let url=this.apiUrl+"/all"
    return this.http.get<Response[]>(url)
  }
  getSquadra(team:string){
    let url=this.apiUrl+"/partita/"+team
    return this.http.get<Response[]>(url)
  }
  getCompetizione(competizione:string){
    let url=this.apiUrl+"/competizione/"+competizione
    return this.http.get<Response[]>(url)
  }
  getData(data:string){
    let url=this.apiUrl+"/date/"+data
    return this.http.get<Response[]>(url)
  }

}

export interface Response{
  title:string
  competition:string
  competitionUrl:string
  matchviewUrl:string
  thumbnail:string
  date:Date
  video:{
    title:string
    embed:string
  }[]
}
