'use strict';

var assert = require("assert")
var Resource = require("../lib/resource")
var Relation = require("../lib/relation")

describe('Resource', function () {

    describe('Relation', function () {
        it('should add relation', function () {
            var resource = new Resource();
            var testRel = new Relation('test');
            testRel.href = 'blub';
            resource.addRelation(testRel);
            assert.equal(resource.relations.length, 1);
        })
    })

});