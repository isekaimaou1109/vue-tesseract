import {
  recognize,
  createWorker,
  createScheduler,
  setLogging,
  detect,
  OEM,
  PSM
} from 'tesseract.js';
import { h } from 'vue';
import {
  Fragment
} from 'vue-fragment'

export const TesseractComponent = {
  data: () => ({
    OEM,
    PSM
  }),
  render() {
    return h(
      h(Fragment),
      this.$slots.default({ 
        $oem: this.OEM,
        $psm: this.PSM,
        $recognize: recognize,
        $createworker: createWorker,
        $createscheduler: createScheduler,
        $setlogging: setLogging,
        $detect: detect
      })
    );
  }
}