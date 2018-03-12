var fs = require('fs');
var UtilsService = require('./UtilsService');

var FileService = {};

/** 
 * Delete all the files into cypress/screenshot
 */
FileService.cleanScrennshotFolder = () => {
    return UtilsService.executeCommand('rm -r cypress/screenshots');
}

/**
 * Copy all the files into cypress/screenshot to anothe location
 */
FileService.copyScreenshotFolder = (timestamp) => {
    return new Promise((resolve, reject) => {
        console.log(`FileService copyScreenshotFolder start`);
        fs.mkdir(`public/images/${timestamp}`, () => {
            console.log(`FileService copyScreenshotFolder info: folder public/images/${timestamp} created`);
            UtilsService.copyFile('cypress/screenshots/T1-before.png', `public/images/${timestamp}/T1-before.png`)
                .then(() => UtilsService.copyFile('cypress/screenshots/T1-after.png', `public/images/${timestamp}/T1-after.png`))
                .then(() => resolve());
        });
    });
}

module.exports = FileService;