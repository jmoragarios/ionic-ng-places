import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor( private placesService: PlacesService, private router: Router ) { }

  ngOnInit() {
  }

  savePlace({value: title}: IonInput, {value: imageURL} : IonInput){
    this.placesService.addPlace(title+'', imageURL+''); 
    this.router.navigate(['/places']);
  }
}
