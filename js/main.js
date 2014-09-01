require.config({ 
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "backbone" : { "deps" :['underscore'] }
    },
    paths: {
        "jquery" : "3rd/jquery",
        "bootstrap" :  "3rd/bootstrap",
        "underscore" : "3rd/underscore",
        "backbone" : "3rd/backbone",
    }
}); 

require([
  'jquery',
  'bootstrap',
  'underscore',
  'backbone'
],
function($, bootstrap, _, Backbone){

  // Start your application here...

});  
