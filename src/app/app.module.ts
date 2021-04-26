import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { CardComponent } from "./card/card.component";
import { MovieService } from "./services/movie.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent
  ],
  bootstrap: [AppComponent],
  providers: [MovieService]
})
export class AppModule {}
