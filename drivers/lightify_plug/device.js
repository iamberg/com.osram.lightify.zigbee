'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');

const { CLUSTER } = require('zigbee-clusters');

class LightifyPlugZigBee extends ZigBeeDevice {
	onNodeInit() {

		// Register onoff capability
		this.registerCapability('onoff', CLUSTER.ON_OFF, {
			getOpts: {
				pollInterval: 15000,
			},
		});
	}
}

module.exports = LightifyPlugZigBee;