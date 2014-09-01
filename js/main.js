require.config({ 
  // Require is defined in /scripts, so just the remaining path (and no ext needed)
  'paths': {
    "bootstrap": "3rd/bootstrap"
    "jquery": "3rd/jquery",
    "underscore": "3rd/underscore-min", 
    "backbone": "3rd/backbone-min"
  },
  'shim': 
  {
    backbone: {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
      underscore: {
        'exports': '_'
    }
  }
}); 

require([
  'bootstrap',
  'jquery',
  'underscore',
  'backbone'
], 
function(bootstrap, $, _, Backbone){

  // Start your application here...

});  