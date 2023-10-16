import { Component } from '@angular/core';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
@ -7,6 +9,22 @@ import { Component } from '@angular/core';
})
export class HomePage {

  constructor() {}
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
    
      // const theActualPicture = image.dataUrl;
      this.photo = image.dataUrl;
    };
    takePicture();
  }
}
