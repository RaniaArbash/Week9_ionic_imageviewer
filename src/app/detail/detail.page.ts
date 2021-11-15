import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../Photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedImage: Photo
  constructor(private service: PhotoService,
    private activated_route: ActivatedRoute) { }

    ionViewWillEnter(){
    }
  ngOnInit() {
    this.activated_route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('photo_id')){
        return;
      }
      const id = paramMap.get('photo_id');
      console.log(id);
     // this.service.getPhotoByID(id);
      this.loadedImage = this.service.getPhotoByID(id);
      console.log(this.loadedImage.url);
    })
  }

}
