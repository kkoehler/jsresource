'use strict';

var assert = require("assert")
var Resource = require("../lib/resource");
var Relation = require("../lib/relation");
var HalEnricher = require("../lib/hal-enricher");

describe('Resource', function () {

    describe('HAL Extender', function () {
        it('should add relation', function () {
            var resource = new Resource();
            var testRel = new Relation('test');
            resource.addRelation(testRel);
            
            var halObject = {'_links':{'test':{}}};
            
            var exportObject = {};
            var extender = new HalEnricher();
            extender.enrich(exportObject, resource);
            
            assert.deepEqual(exportObject, halObject);
        });
        
        it('should add relation with href', function () {
            var resource = new Resource();
            var testRel = new Relation('test');
            testRel.href = 'http://localhost';
            resource.addRelation(testRel);
            
            var halObject = {'_links':{'test':{'href':'http://localhost'}}};
            
            var exportObject = {};
            var extender = new HalEnricher();
            extender.enrich(exportObject, resource);
            
            assert.deepEqual(exportObject, halObject);
        });
        
    })

});