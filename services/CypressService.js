var UtilsService = require('./UtilsService');
var CypressService = {};

CypressService.execute = testFile => {
    console.log(`CypressService execute start: testFile = ${testFile}`);
    return UtilsService.executeCommand(`cypress run --spec ${testFile}`);
};

module.exports = CypressService;