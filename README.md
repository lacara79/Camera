# Notas
Esse projeto é uma base do site com algumas alterações.

https://capacitorjs.com/docs/apis/camera#install
https://ionicframework.com/docs/native/camera

# Iniciando um projeto Camera
`ionic start camera`

**Escolha o Framework Angular**

# Install Plugin 

`npm install @capacitor/camera`

#Importando elementos PWA ​

`npm install @ionic/pwa-elements`

**No documento main.ts(ANGULAR):**

```
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);
if (environment.production) {
  enableProdMode();
}

```
# home.page.html

```
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Câmera
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
  <div id="container">
    <ion-button (click)="abrir()">Abrir</ion-button>
  </div>
  <ion-card *ngIf="photo">
    <ion-card-content>
      <img [src]="photo">
    </ion-card-content>
  </ion-card>
</ion-content>
```

# home.page.ts

```

import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
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
```

# Em seguida:
`ionic build`

`npx cap sync`

