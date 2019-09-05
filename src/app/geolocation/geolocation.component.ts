import { Component, OnInit } from '@angular/core';
import { GeometryService } from '../services/geometry.service';
import { GeoLocation } from './geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

  constructor(private geometryService: GeometryService) { }

  ngOnInit() {
  }

  search_text: string;


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
    },
  }

  getCords() {
    if (this.search_text == null || this.search_text.length == 0) {
      alert('Please enter text to get Cords')
    } else {

      this.geometryService.getLocation(this.search_text).subscribe(
        (data: GeoLocation) => {
          this.cords.southwest.lat = data.results[0].geometry.viewport.southwest.lat;
          this.cords.southwest.lng = data.results[0].geometry.viewport.southwest.lng;
          this.cords.northeast.lat = data.results[0].geometry.viewport.northeast.lat;
          this.cords.northeast.lng = data.results[0].geometry.viewport.northeast.lng;
          this.show_cords = true;
          console.log(data)

        },
        (error) => {
          this.error = error;
        }
      );
    }

  }

}
