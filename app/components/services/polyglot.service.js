angular.module('pack-web')
.factory('polyglot', function(){

  function iterate(obj, convert){
    var translatedObj = {};
    for(var prop in obj){
      if((typeof obj[prop] !== null) && (typeof obj[prop] === 'object')){
        translatedObj[convert(prop)] = iterate(obj[prop], convert);
      }
      else {
        translatedObj[convert(prop)] = obj[prop];
      }
    }
    return translatedObj;
  }

  var translate = {
    'from': {},
    'to': {}
  };

  translate.from.ruby = function fromRuby(obj){
    return iterate(obj, function(propName){
      return propName + '_done';
    });
  };

  return {
    'translate': translate
  };
});
