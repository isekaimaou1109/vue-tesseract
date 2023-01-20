import Tesseract from 'tesseract.js';
import { TesseractComponent } from './components/TesseractComponent.vue.js';

const TesseractPlugin = {
  install(Vue) {
    Vue.prototype.$tesseractor = () => {
      return Tesseract;
    };
  }
}

export {
  TesseractPlugin,
  TesseractComponent
}