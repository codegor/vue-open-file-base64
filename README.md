# vue-small-plugin

> Plugin helper for Vue.js for work with base64 source data

<p>
  <a href="https://www.npmjs.com/package/vue-small-plugin"><img src="https://img.shields.io/npm/dm/vue-small-plugin.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-small-plugin"><img src="https://img.shields.io/npm/v/vue-small-plugin.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-small-plugin"><img src="https://img.shields.io/npm/l/vue-small-plugin.svg" alt="License"></a>
</p>

## Installation

### Using yarn

`yarn add vue-small-plugin`

### Using npm

`npm i --save vue-small-plugin`

## Examples

```html
<template>

</template>

<script>
import Vue from 'vue';
import SmallPlugin from 'vue-small-plugin';

Vue.use(SmallPlugin);

export default {
data () {
 return {
   file: {
     data: '' // base64 string
     mime: '' // file mime type
   },
   pdf: '' // base64 string
   xls: '' // url string to source of file
 }
},
computed: {
 getImgSrc () {
   return this.$imgSrcB64(this.file);
 },
 getPdfSrc () {
   return this.$aSrcPDFb64(this.file.data);
 },
},
methods: {
 doSomethingWithDebugInfo(){
   if(this.$debug) console.log('show some debug info...');
 },
 savePdf(){
   this.$savePDFb64(this.pdf, 'the_name_of_pdf.pdf'); // open in new window
 },
 openExls(){
   this.$openFile(this.xls); // open in new window
 }
}
}
</script>
```

## Global Properties

| Name            | Type     | Info                                                            |
| ----------------| -------- | --------------------------------------------------------------- |
| **$debug**      | Boolean  | Short hand for Vue debug status var                             |
| **$imgSrcB64**  | Function | Convert from Base64 img data to src string for img:src property |
| **$aSrcPDFb64** | Function | Convert from Base64 pdf data to src string for a:href property  |
| **$savePDFb64** | Function | Save PDF file from Base64 data at new Browser window            |
| **$openFile**   | Function | Open any files from url at new window of Browser                |

## Suggest

For upload files with base64 encoding you can use package satellite [v-upload-base64](https://www.npmjs.com/package/v-upload-base64)

## License

This project is licensed under
[MIT License](http://en.wikipedia.org/wiki/MIT_License)