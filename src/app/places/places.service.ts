import { Injectable } from '@angular/core';
import { Place } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F23%2Fb2%2F98%2F23b298bc76ea0091b2fef522baf28bfb.jpg&f=1&nofb=1',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2OfelcV69ybIkCcA_UTRYwHaKt%26pid%3DApi&f=1',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageURL: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2OfelcV69ybIkCcA_UTRYwHaKt%26pid%3DApi&f=1',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() { 
    return [...this.places]
  }

  getPlace(id: string) { 
    return {
      ...this.places.find( place => place.id === id )
    }
  }
  
  addPlace(title: string, imageURL: string) { 
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ''
    });
   }

  deletePlace(id: string) { 
    this.places = this.places.filter( place => {
      return place.id !== id
    })
   }

}
