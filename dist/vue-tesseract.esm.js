import Tesseract, { OEM, PSM, recognize, createWorker, createScheduler, setLogging, detect } from 'tesseract.js';
import { Fragment } from 'vue-fragment';

Vue.component("tesseract", {
  template: "\n    <fragment>\n      <slot :oem=\"OEM\" :psm=\"PSM\" :$recognize=\"recognize\" :$createworker=\"createWorker\" :$createscheduler=\"createScheduler\" :$setlogging=\"setLogging\" :$detect=\"detect\">\n      </slot>\n    </fragment>\n  ",
  name: 'TesseractComponent',
  components: {
    'fragment': Fragment
  },
  data: function data() {
    return {
      OEM: OEM,
      PSM: PSM
    };
  },
  methods: {
    recognize: recognize,
    createWorker: createWorker,
    createScheduler: createScheduler,
    setLogging: setLogging,
    detect: detect
  }
});

var TesseractPlugin = {
  install: function install(Vue) {
    /** USE AS A PLUGIN IN VUEJS 2 OR 3 */
    Vue.prototype.$tesseractor = function () {
      return Tesseract;
    };
  }
};

export { TesseractPlugin };
