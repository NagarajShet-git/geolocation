import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-geo-search",
  templateUrl: "./geo-search.component.html",
  styleUrls: ["./geo-search.component.css"]
})
export class GeoSearchComponent implements OnInit {
  constructor() {}

  search_text: string;
  store_search: string;

  ngOnInit() {}

  getGeoCords(search) {
    if (this.search_text == null || this.search_text.length == 0) {
      alert("Please enter text to get Cords");
    } else {
      this.store_search = search;
    }
  }
}
