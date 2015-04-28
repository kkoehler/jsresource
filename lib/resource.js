'use strict';

var Resource = function() {
    this.relations = [];
};

Resource.prototype.relations = function() {
    return this.relations;
};

Resource.prototype.addRelation = function(relation) {
    
    this.relations.push(relation);
    
};

Resource.prototype.property = function(propertyName) {
    return this[propertyName];
};

module.exports = Resource;