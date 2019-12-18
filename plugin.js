export default {
  install($Vue){
    $Vue.prototype.$debug = $Vue.config.devtools;
    $Vue.prototype.$cloneObj = (obj) => {return JSON.parse(JSON.stringify(obj));};
    $Vue.prototype.$openPDFb64 = function(data, name){
      if(this.$debug) console.log('show pdf', name);
      let a = document.createElement("a");
      a.href = "data:application/pdf;base64,"+data;
      a.download = name;
      a.target = "_blank";
      a.click();
    };
    $Vue.prototype.$openFile = function(url, name){
      if(this.$debug) console.log('show file', name);
      let a = document.createElement("a");
      a.href = url;
      // a.download = name;
      a.target = "_blank";
      a.click();
    };
    $Vue.prototype.$imgSrcB64 = (f){
      return 'data:'+f.mime+';base64,'+f.data;
    }
  }
}