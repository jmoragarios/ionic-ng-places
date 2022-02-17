import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor( private route: ActivatedRoute, private placesService: PlacesService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      const placeId = paramMap.get('id');
      this.place = this.placesService.getPlace(placeId);
    })
  }

}
