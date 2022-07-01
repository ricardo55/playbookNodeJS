// Importar las clases necesarias
const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController {

    static getExplorersByMission(mission) {

        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    


}

