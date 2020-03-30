'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class LightifyWhiteZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Classic B40 TW - LIGHTIFY': {
				approximation: {
					usageOff: 0.5,
					usageOn: 6,
				},
			},
		};
	}
}

module.exports = LightifyWhiteZigBee;