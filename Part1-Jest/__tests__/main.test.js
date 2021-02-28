const formatVolumeIconPath = require('../assets/scripts/main');

describe('Tests for proper iconLevel from volumeValue input', () => {

    test('iconLevel = 3 if volumeValue > 66', () => {
        expect(formatVolumeIconPath(80)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });

    test('iconLevel = 2 if 33 < volumeValue <= 66', () => {
        expect(formatVolumeIconPath(50)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test('iconLevel = 1 if 0 < volumeValue <= 33', () => {
        expect(formatVolumeIconPath(20)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test('iconLevel = 0 if volumeValue = 0', () => {
        expect(formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });

});