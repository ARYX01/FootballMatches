import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "http://localhost:8080/api"
  constructor(private http:HttpClient) { }

  getAll(){
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

  getPredictions(){
    let url=this.apiUrl+"/all/prediction/"
    return this.http.get<Predictions[]>(url)
  }

}

export interface Predictions{
  home_team:string
  away_team:string
  id:number
  competition_name:string
  prediction:string
  competition_cluster:string
  status:string
  start_date:string
  odds:Odds
}

export interface Odds{
  "1":number
  "2":number
  "12":number
  "X":number
  "1X":number
  "X2":number
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
