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

# Em seguida:
`ionic build`

`npx cap sync`

