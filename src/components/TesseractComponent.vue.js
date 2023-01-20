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

export const component = {
  template: `
    <fragment>
      <slot :oem="OEM" :psm="PSM" :$recognize="recognize" :$createworker="createWorker" :$createscheduler="createScheduler" :$setlogging="setLogging" :$detect="detect">
      </slot>
    </fragment>
  `,
  name: 'TesseractComponent',
  components: {
    'fragment': Fragment
  },
  data: () => ({
    OEM,
    PSM
  }),
  methods: {
    recognize,
    createWorker,
    createScheduler,
    setLogging,
    detect
  }
}
