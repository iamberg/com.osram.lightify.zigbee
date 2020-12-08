'use strict';

const Homey = require('homey');
// const { Log } = require('homey-log'); // TODO: re-enable when SDKv3 compatible

// Enable zigbee-cluster logging
const { Util } = require('homey-zigbeedriver');

Util.debugZigbeeClusters(true);

class OsramApp extends Homey.App {
	onInit() {
		this.log('init OsramApp');
	}
}

module.exports = OsramApp;
