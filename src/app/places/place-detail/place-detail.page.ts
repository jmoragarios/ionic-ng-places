import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor( 
    private route: ActivatedRoute, 
    private placesService: PlacesService, 
    private router: Router, private alertController : AlertController ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      const placeId = paramMap.get('id');
      this.place = this.placesService.getPlace(placeId);
    })
  }

  async deletePlace() {

    const alertElement = await this.alertController.create({
      header: 'Are you sure, you want to delete it?',
      message: 'Be careful',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      }, {
        text: 'Delete',
        handler: () => { 
          this.placesService.deletePlace(this.place.id);
          this.router.navigate(['/places']);
        },
        cssClass: 'danger'
      }]
    });

    await alertElement.present();
    
  }

}
