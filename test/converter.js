var expect = require('chai').expect;
var converter = require('../app/converter');

describe('Color Code Converter', () => {
	describe('RGB to Hex conversion', () => {
		it('converts the basic colors', function() {
			var redHex = converter.rgbToHex(255, 0, 0);
			var greenHex = converter.rgbToHex(0, 255, 0);
			var blueHex = converter.rgbToHex(0, 0, 255);

			expect(redHex).to.equal('ff0000');
			expect(greenHex).to.equal('00ff00');
			expect(blueHex).to.equal('0000ff');
		});
	});

	describe('Hex to RGB conversion', () => {
		it('converts the basic colors', function() {
			var redRGB = converter.hexToRgb('ff0000');
			var greenRGB = converter.hexToRgb('00ff00');
			var blueRGB = converter.hexToRgb('0000ff');

			expect(redRGB).to.deep.equal([255, 0, 0]);
			expect(greenRGB).to.deep.equal([0, 255, 0]);
			expect(blueRGB).to.deep.equal([0, 0, 255]); // deep compares the array elements 1 by 1
		});
	});
});
