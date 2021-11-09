import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../Photo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  listOfPhotos : Photo[]
  constructor(private service: PhotoService) {}

  ionViewWillEnter(){
    console.log("View will enter")
  }
  ionViewDidEnter(){
    console.log("View did enter")
  }
  ionViewDidLeave(){
    console.log("View did leave")
  }
  ionViewWillLeave(){
    console.log("View will leave")
  }
  ngOnInit(){
      this.listOfPhotos = this.service.getAllImages();
  }

}
