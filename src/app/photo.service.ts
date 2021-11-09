import { Injectable } from '@angular/core';
import { Photo } from './Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos : Photo[] = [{
    id: '1',
    title: 'horse',
    url:'https://images.freeimages.com/images/small-previews/443/horse-1393073.jpg'
  },{id: '2',
    title: 'hourglass',
    url:'https://images.freeimages.com/images/small-previews/6b2/hourglass-1543596.jpg'},
    {id: '3',
      title: 'bay-lrt-station',
      url:'https://images.freeimages.com/images/small-previews/b85/bay-lrt-station-1626400.jpg'
    }];

  constructor() { }

  getAllImages(){
    return [...this.photos];
  }
  getPhotoById(photoID){
    return {...this.photos.find(
      photo => {return photo.id === photoID;})}
  }
}
