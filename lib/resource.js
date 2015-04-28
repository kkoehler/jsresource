'use strict';

var Resource = function() {
    this.links = [];
};

Resource.prototype.links = function() {
    return this.links;
};

Resource.prototype.addLink = function(relName, href) {
    
    this.links.push({
        rel: relName,
        href: href
    });
    
};

Resource.prototype.property = function(propertyName) {
    return this[propertyName];
};

module.exports = Resource;