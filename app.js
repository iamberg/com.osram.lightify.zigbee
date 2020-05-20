'use strict';

const Homey = require('homey');
// const Log = require('homey-log').Log; // TODO: not yet sdkv3 compatible

class OsramApp extends Homey.App {
	onInit() {
		this.log('init OsramApp');
	}
}

module.exports = OsramApp;
