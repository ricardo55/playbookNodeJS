const fs = require("fs");

class Reader {

    static readJsonFile(filePath) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }


}

module.exports = Reader;