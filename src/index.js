import Tesseract from 'tesseract.js';
import './components/TesseractComponent.vue.js';

const TesseractPlugin = {
  install(Vue) {
    /** USE AS A PLUGIN IN VUEJS 2 OR 3 */
    Vue.prototype.$tesseractor = () => {
      return Tesseract;
    };
  }
}

export {
  TesseractPlugin
}