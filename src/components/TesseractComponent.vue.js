import {
  recognize,
  createWorker,
  createScheduler,
  setLogging,
  detect,
  OEM,
  PSM
} from 'tesseract.js';
import {
  Fragment
} from 'vue-fragment'

export const TesseractComponent = {
  data: () => ({
    OEM,
    PSM
  }),
  render(createElement) {
    return createElement(
      createElement(Fragment),
      this.$scopedSlots.default({ 
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