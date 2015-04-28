'use strict';

var halAttributes = ['href', 'templated', 'type', 'deprecation', 'name', 'profile', 'title', 'hreflang'];

var HalEnricher = function() {
};

HalEnricher.prototype.enrich = function(obj, resource){
    
    obj._links = {};
    
    resource.relations.forEach(function(value){
        var rel = {};
        
        halAttributes.forEach(function(attributeName) {
            if (value[attributeName]) {
                rel[attributeName] = value[attributeName];
            }    
        });
        
        obj._links[value.relName] = rel;
    });
    
};

module.exports = HalEnricher;