'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class LightifyRGBWFlexZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Flex RGBW': {
				approximation: {
					usageOff: 0.5,
					usageOn: 15,
				},
			},
		};
	}
}

module.exports = LightifyRGBWFlexZigBee;
