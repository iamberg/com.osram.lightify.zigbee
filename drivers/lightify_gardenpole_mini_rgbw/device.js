'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class LightifyGardenpoleMiniRGBWZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'Gardenpole Mini RGBW-Lightify': {
				approximation: {
					usageOff: 0.5,
					usageOn: 21,
				},
			},
		};
	}
}

module.exports = LightifyGardenpoleMiniRGBWZigBee;
