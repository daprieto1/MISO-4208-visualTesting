var UtilsService = require('./UtilsService');
var CypressService = {};

CypressService.execute = testFile => {
    return UtilsService.executeCommand(`cypress run --spec ${testFile}`);
};

module.exports = CypressService;