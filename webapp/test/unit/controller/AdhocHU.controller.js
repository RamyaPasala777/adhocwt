/*global QUnit*/

sap.ui.define([
	"comapp/adhocwt/controller/AdhocHU.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AdhocHU Controller");

	QUnit.test("I should test the AdhocHU controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
