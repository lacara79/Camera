import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
//import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photo: any = "";

  constructor() {}
  
  async abrir(){
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        saveToGallery: true
      });
      
      this.photo = image.dataUrl;
    };
    takePicture();
  }
}
