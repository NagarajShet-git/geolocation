import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { GeometryService } from "../services/geometry.service";
import { Geometry } from "../geo-search/geometry";

@Component({
  selector: "app-cords-view",
  templateUrl: "./cords-view.component.html",
  styleUrls: ["./cords-view.component.css"]
})
export class CordsViewComponent implements OnInit, OnChanges {
  @Input() search_text;
  show_cords: boolean = false;
  error: {};

  cords = {
    southwest: {
      lat: null,
      lng: null
    },
    northeast: {
      lat: null,
      lng: null
    }
  };
  constructor(private geoService: GeometryService) {}

  ngOnChanges() {
    this.getGeoCords();
  }
  ngOnInit() {}

  getGeoCords() {
    this.geoService.getLocation(this.search_text).subscribe(
      (data: Geometry) => {
        this.cords.southwest.lat =
          data.results[0].geometry.viewport.southwest.lat;
        this.cords.southwest.lng =
          data.results[0].geometry.viewport.southwest.lng;
        this.cords.northeast.lat =
          data.results[0].geometry.viewport.northeast.lat;
        this.cords.northeast.lng =
          data.results[0].geometry.viewport.northeast.lng;
        this.show_cords = true;
      },
      error => {
        this.error = error;
      }
    );
  }
}
