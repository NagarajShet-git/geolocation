import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { GeoSearchComponent } from "./geo-search/geo-search.component";
import { CordsViewComponent } from "./cords-view/cords-view.component";

@NgModule({
  declarations: [AppComponent, GeoSearchComponent, CordsViewComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
