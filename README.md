# Iniciando um projeto Camera
`ionic start camera`

**Escolha o Framework Angular**

# Install Plugin 

`npm install @capacitor/camera`

#Importando elementos PWA ​

`npm install @ionic/pwa-elements`

**No documento main.ts(ANGULAR):**

```import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);
if (environment.production) {
  enableProdMode();
}

Em seguida:
`ionic build`

`npx cap sync`

