import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./components/api.service";
import { PartiteComponent } from './components/partite/partite.component';
import { RicercaComponent } from './components/ricerca/ricerca.component';
import { SanitizeHtmlPipe } from './components/sanitizeHtml.pipe';
import { BetsComponent } from './components/bets/bets.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PartiteComponent,
    RicercaComponent,
    SanitizeHtmlPipe,
    BetsComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
