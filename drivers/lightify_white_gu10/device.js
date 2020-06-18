'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class LightifyWhiteZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'PAR16 50 TW': {
				approximation: {
					usageOff: 0.5,
					usageOn: 6,
				},
			},
		};
	}
}

module.exports = LightifyWhiteZigBee;