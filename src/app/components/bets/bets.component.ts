import { Component, OnInit } from '@angular/core';
import {ApiService, Odds, Predictions} from "../api.service";

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styles: [
  ]
})
export class BetsComponent implements OnInit {

  bets:Predictions[]=[]

  betsFilter:Predictions[]=[]
  team:string=""
  comp:string=""

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    if(this.betsFilter.length==0)
      this.service.getPredictions().subscribe(res=>{this.betsFilter=res;this.bets=res})
  }

  getPrediction(predizione:string, odds:Odds){
    // @ts-ignore
    return odds[predizione]
  }

  cercaPerTeam(){
    this.team = this.team.toLowerCase();
    this.bets=this.betsFilter
      .filter(bet=>bet.away_team.toLowerCase().startsWith(this.team)||bet.home_team.toLowerCase().startsWith(this.team))
  }

  cercaPerComp(){
    this.comp = this.comp.toLowerCase();
    this.bets=this.betsFilter
      .filter(bet=>bet.competition_name.toLowerCase().startsWith(this.comp))
  }

}
