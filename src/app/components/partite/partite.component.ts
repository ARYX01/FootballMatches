import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partite',
  templateUrl: './partite.component.html',
  styles: [
  ]
})
export class PartiteComponent implements OnInit {

  partiteOggi:Response[]=[]

  constructor() { }

  ngOnInit(): void {
    this.partiteOggi.push({
        title: "Correcaminos - Pumas Tabasco",
        competition: "MEXICO: Liga de Expansion, Apertura",
        matchviewUrl: "https:\/\/www.scorebat.com\/embed\/matchview\/1070064\/",
        competitionUrl: "https:\/\/www.scorebat.com\/embed\/competition\/mexico-liga-de-expansion-apertura\/",
        thumbnail: "https:\/\/www.scorebat.com\/og\/m\/og1070064.jpeg",
        date: new Date(2021, 9, 15),
        videos: [
          {
            title: "0-1 O. Islas",
            embed: "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/61418be947875\/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
          },
          {
            title: "Highlights",
            embed: "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/61418be9482bd\/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
          },
          {
            title: "0-2 R. Monreal",
            embed: "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/61418be948d73\/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
          }
        ]
      },
      {
        "title": "Bournemouth - QPR",
        "competition": "ENGLAND: Championship",
        "matchviewUrl": "https:\/\/www.scorebat.com\/embed\/matchview\/1056368\/",
        "competitionUrl": "https:\/\/www.scorebat.com\/embed\/competition\/england-championship\/",
        "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1056368.jpeg",
        "date": new Date(2021,9,14),
        "videos": [
          {
            "title": "Highlights",
            "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/614186b6119ad\/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
          }
        ]
      },
      {
        "title": "Toronto FC - Inter Miami FC",
        "competition": "USA: Major League Soccer",
        "matchviewUrl": "https:\/\/www.scorebat.com\/embed\/matchview\/1041872\/",
        "competitionUrl": "https:\/\/www.scorebat.com\/embed\/competition\/usa-major-league-soccer\/",
        "thumbnail": "https:\/\/www.scorebat.com\/og\/m\/og1041872.jpeg",
        "date": new Date(2021,9,14),
        "videos": [
          {
            "title": "Highlights",
            "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/61417d762ea4a\/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
          },
          {
            "title": "0-1 Christian Makoun 90+5'",
            "embed": "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https:\/\/www.scorebat.com\/embed\/v\/61415214ed7fe\/?utm_source=api&utm_medium=video&utm_campaign=v3' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'><\/iframe><\/div>"
          }
        ]
      })
  }


}

export interface Response{
  title:string
  competition:string
  competitionUrl:string
  matchviewUrl:string
  thumbnail:string
  date:Date
  videos:{
    title:string
    embed:string
  }[]
}
