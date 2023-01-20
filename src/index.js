import Tesseract from 'tesseract.js';
import { TesseractComponent } from './components/TesseractComponent.vue.js';

const TesseractPlugin = {
  install(Vue) {
    /** USE AS A PLUGIN IN VUEJS 2 OR 3 */
    Vue.prototype.$tesseractor = () => {
      return Tesseract;
    };

    Vue.component('vue-tesseract', TesseractComponent);
  }
}

export {
  TesseractPlugin
}