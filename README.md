# **A Vue Package for Image-To-Text Using Tesseract.js** #


## **Description:** ##  
This package can be used as Component or Plugin. 

## **Note**: ## 
I've tested in VueJS 2. That was okay after all.

## **Usage:** ##
> __Case 1__: ```Used as Component```
```javascript
<script>
export default {
  name: "HelloWorldComponent",
  props: {
    msg: {
      type: String
    }
  },
  data: () => ({
    example: {
      url: 'https://tesseract.projectnaptha.com/img/eng_bw.png',
      lang: 'eng'
    },
    testData: null
  }),
  methods: {
    logger: m => console.log(m),
    async demo(cb) {
      const res = (await cb(this.example.url, this.example.lang, this.logger)).data
      this.testData = res
    }
  }
}
</script>

<template>
  <div class="greetings">
    <vue-tesseract v-slot="{ $recognize }">
      <h1 class="green" @click="demo($recognize)">Click on Me!</h1>
      <h2 class="test-class">{{ testData?.text }}</h2>
    </vue-tesseract>
  </div>
</template>
```

> __Case 2__: ```Used as Plugin```
```javascript
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import { TesseractPlugin } from 'vue-tesseracts'

Vue.use(TesseractPlugin)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
```

**Hopefully this will help you. If you like, you can give a like. Thank you. :heart:** 