export default {
  install($Vue){
    $Vue.prototype.$debug = $Vue.config.devtools;
    $Vue.prototype.$aSrcPDFb64 = (data) => {
      // if(this.$debug) console.log('show pdf', name);
      var byteCharacters = atob(data);
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      var file = new Blob([byteArray], { type: 'application/pdf;base64' });
      return URL.createObjectURL(file);
    };
    $Vue.prototype.$savePDFb64 = (data, name) => {
      // if(this.$debug) console.log('show pdf', name);
      // window.open("data:application/octet-stream;charset=utf-16le;base64,"+data64);
      let a = document.createElement("a");
      a.href = "data:application/pdf;base64,"+data;
      a.download = name;
      a.target = "_blank";
      a.click();
    };
    $Vue.prototype.$openFile = (url, name) => {
      // if(this.$debug) console.log('show file', name);
      let a = document.createElement("a");
      a.href = url;
      // a.download = name;
      a.target = "_blank";
      a.click();
    };
    $Vue.prototype.$imgSrcB64 = f => {
      return 'data:'+f.mime+';base64,'+f.data;
    }
  }
}